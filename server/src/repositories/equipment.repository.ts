import {
  BelongsToAccessor,
  DefaultCrudRepository,
  juggler,
  repository,
} from '@loopback/repository';
import { Equipment, Set } from '../models';
import { SetRepository } from './set.repository';

import { DbDataSource } from '../datasources';
import { Getter, inject } from '@loopback/core';

export class EquipmentRepository extends DefaultCrudRepository<
  Equipment,
  typeof Equipment.prototype._id
  > {
  public readonly set: BelongsToAccessor<
    Set,
    typeof Equipment.prototype._id
  >;
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('SetRepository')
    protected setRepositoryGetter: Getter<SetRepository>,
  ) {
    super(Equipment, dataSource);
    this.set = this.createBelongsToAccessorFor(
      'set',
      setRepositoryGetter,
    );
  }
}
