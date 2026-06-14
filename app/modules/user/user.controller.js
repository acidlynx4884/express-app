import { User } from '../../models/User.js';

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;
const MAX_LIMIT = 100;

export const userGetAll = async (req, res) => {
    const page = Math.max(DEFAULT_PAGE, Number(req.query.page) || DEFAULT_PAGE);
    const limit = Math.min(
        MAX_LIMIT,
        Math.max(1, Number(req.query.limit) || DEFAULT_LIMIT)
    );
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
        User.find().skip(skip).limit(limit).lean(),
        User.countDocuments(),
    ]);

    res.json({
        data: users,
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        },
    });
};

export const userCreate = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
};

export const userGetById = (req, res) => {
    const { id } = req.params;
    res.json({ message: 'User found', id });
};

export const userDelete = (req, res) => {
    const { id } = req.params;
    res.json({ message: 'User deleted', id });
};
