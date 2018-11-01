import { ExpressDriver } from '@oriented/express';
import { buildCatalogRouter } from './Catalog/RouteHandler';
import { buildOrderRouter } from './Orders/RouteHandler';

const app = ExpressDriver.start();

buildCatalogRouter(app);
buildOrderRouter(app);