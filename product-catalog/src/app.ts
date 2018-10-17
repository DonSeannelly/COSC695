import { ExpressDriver } from '@oriented/express';
import { CatalogRouter } from './RouteHandler';

const app = ExpressDriver.start();

app.use('/products', CatalogRouter);
