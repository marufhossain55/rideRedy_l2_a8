import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

import status from 'http-status';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.use(globalErrorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('BikeCare-Hub Server is running');
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: 'API NOT FOUND',
    error: {
      path: req.originalUrl,
      message: 'Your requested path is not found',
    },
  });
});

export default app;
