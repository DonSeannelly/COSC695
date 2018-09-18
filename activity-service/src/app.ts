import { ExpressDriver, ExpressResponder } from '@oriented/express';
import { ActivityRouter } from './RouteHandler';

const app = ExpressDriver.start();

app.use('/activities', ActivityRouter);
