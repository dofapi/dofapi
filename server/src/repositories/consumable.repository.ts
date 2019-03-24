import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Consumable } from '../models';
import { DbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class ConsumableRepository extends DefaultCrudRepository<
  Consumable,
  typeof Consumable.prototype._id
  > {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Consumable, dataSource);
  }
}
