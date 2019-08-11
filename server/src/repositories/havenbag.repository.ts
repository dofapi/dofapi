import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Havenbag } from '../models';
import { DbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class HavenbagRepository extends DefaultCrudRepository<
    Havenbag,
    typeof Havenbag.prototype._id
    > {
    constructor(
        @inject('datasources.db') dataSource: DbDataSource,
    ) {
        super(Havenbag, dataSource);
    }
}
