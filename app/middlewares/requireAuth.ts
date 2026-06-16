import type { NextFunction, Request, Response } from 'express';
import { User } from '../models/User.js';

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
    const session = req.cookies.session;

    if (!session) {
        return res.status(401).json({ error: 'Not authenticated' });
    }

    const user = await User.findById(session);

    if (!user) {
        return res.status(401).json({ error: 'Not authenticated' });
    }

    req.user = user;
    next();
};
