import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Pet } from '../models';
import { DbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class PetRepository extends DefaultCrudRepository<
  Pet,
  typeof Pet.prototype._id
  > {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Pet, dataSource);
  }
}
