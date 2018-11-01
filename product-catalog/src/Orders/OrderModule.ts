import { LokiConnector } from './Loki/LokiConnector';

export const Context = {
  dataStore: new LokiConnector(),
};
