import dotenv from 'dotenv-safe';
import app from './utils/express';

dotenv.config();

const PORT = parseInt(process.env.PORT || '3000');

process.on('uncaughtException', (error: Error) => {
    console.error(`Uncaught Exception: ${error.message}`);
});

process.on('unhandledRejection', (reason: Error | any) => {
    console.error(`Unhandled Rejection: ${reason.message || reason}`);
    throw new Error(reason.message || reason);
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is listening on ${PORT} with NODE_ENV: ${process.env.NODE_ENV}`);
});
