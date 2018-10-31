import { ExpressDriver } from '@oriented/express';
import { buildCatalogRouter } from './Catalog/RouteHandler';

const app = ExpressDriver.start();

buildCatalogRouter(app);
