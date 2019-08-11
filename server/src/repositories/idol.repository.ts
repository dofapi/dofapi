import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Idol } from '../models';
import { DbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class IdolRepository extends DefaultCrudRepository<
    Idol,
    typeof Idol.prototype._id
    > {
    constructor(
        @inject('datasources.db') dataSource: DbDataSource,
    ) {
        super(Idol, dataSource);
    }
}
