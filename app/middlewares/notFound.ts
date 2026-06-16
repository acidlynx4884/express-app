import type { Request, Response } from 'express';

export const notFound = (req: Request, res: Response) => {
    res.status(404).json({ error: `page not found for ${req.method} ${req.url}` });
};
