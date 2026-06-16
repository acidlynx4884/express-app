import type { Request, Response } from 'express';
import type { CookieOptions } from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../../models/User.js';

const cookieOptions: CookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 24 * 30,
};

export const authLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.cookie('session', user._id.toString(), cookieOptions);

    res.json({
        message: 'User logged in',
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
        },
    });
};

export const authLogout = (_req: Request, res: Response) => {
    res.clearCookie('session', cookieOptions);
    res.json({
        message: 'User logged out',
    });
};

export const authSignup = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email and password are required' });
    }

    try {
        const user = await User.create({ name, email, password });

        res.status(201).json({
            message: 'User signed up',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (err: unknown) {
        if (err && typeof err === 'object' && 'code' in err && err.code === 11000) {
            return res.status(409).json({ error: 'Email already in use' });
        }

        throw err;
    }
};
