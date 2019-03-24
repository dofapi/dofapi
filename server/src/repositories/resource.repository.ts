import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Resource } from '../models';
import { DbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class ResourceRepository extends DefaultCrudRepository<
  Resource,
  typeof Resource.prototype._id
  > {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Resource, dataSource);
  }
}
