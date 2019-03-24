import { DofapiApplication } from './application';
import { ApplicationConfig } from '@loopback/core';

export { DofapiApplication };

export async function main(options: ApplicationConfig = {}) {
  const app = new DofapiApplication(options);
  await app.boot();
  await app.start();
  await app.basePath('/api');

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
