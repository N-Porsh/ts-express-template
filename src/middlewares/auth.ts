import { NextFunction, Request, Response } from 'express';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if (!authorization) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }
    const token = authorization.split(' ')[1];
    if (token !== '123') {
        res.status(403).json({ message: 'Forbidden' });
        return;
    }
    next();
};
