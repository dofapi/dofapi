import { inject } from '@loopback/core';
import { juggler } from '@loopback/repository';
import * as config from './mlab.datasource.json';

export class MlabDataSource extends juggler.DataSource {
  static dataSourceName = 'mlab';

  constructor(
    @inject('datasources.config.mlab', { optional: true })
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
