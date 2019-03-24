import {
  BelongsToAccessor,
  DefaultCrudRepository,
  juggler,
  repository,
} from '@loopback/repository';
import { Weapon, Set } from '../models';
import { SetRepository } from './set.repository';

import { DbDataSource } from '../datasources';
import { Getter, inject } from '@loopback/core';

export class WeaponRepository extends DefaultCrudRepository<
  Weapon,
  typeof Weapon.prototype._id
  > {
  public readonly set: BelongsToAccessor<
    Set,
    typeof Weapon.prototype._id
  >;
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('SetRepository')
    protected setRepositoryGetter: Getter<SetRepository>,
  ) {
    super(Weapon, dataSource);
    this.set = this.createBelongsToAccessorFor(
      'set',
      setRepositoryGetter,
    );
  }
}
