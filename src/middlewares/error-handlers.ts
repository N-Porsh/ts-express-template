import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export const errorLogger = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('\x1b[31m', err.stack);
    next(err);
};

export const notFoundHandler = (req: Request, res: Response) => {
    res.status(404).json({ message: 'Not Found' });
};

export const errorHandler: ErrorRequestHandler = (err, req: Request, res: Response, next: NextFunction) => {
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Something went wrong';
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: process.env.NODE_ENV === 'dev' ? err.stack : {},
    });
    next();
};
