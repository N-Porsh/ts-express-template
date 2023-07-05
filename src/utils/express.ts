import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';
import routes from '../routes';
import { errorHandler, errorLogger, notFoundHandler } from '../middlewares/error-handlers';


const app: Express = express();

app.use(cors());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/_healthcheck', (req: Request, res: Response) => {
    res.status(200).json({ status: 'ok' });
});

app.use('/api', routes);

app.use(errorLogger);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
