import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Mount } from '../models';
import { DbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class MountRepository extends DefaultCrudRepository<
  Mount,
  typeof Mount.prototype._id
  > {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Mount, dataSource);
  }
}
