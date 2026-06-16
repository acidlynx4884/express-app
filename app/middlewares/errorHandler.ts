import type { NextFunction, Request, Response } from 'express';

type AppError = Error & { status?: number };

export const errorHandler = (err: AppError, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status ?? 500;
    res.status(status).json({ error: err.message ?? 'Internal server error' });
};
