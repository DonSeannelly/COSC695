import { ExpressDriver } from '@oriented/express';
import { CatalogRouter } from './Catalog/RouteHandler';

const app = ExpressDriver.start();

app.use('/products', CatalogRouter);
