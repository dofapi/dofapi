import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Harness } from '../models';
import { DbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class HarnessRepository extends DefaultCrudRepository<
    Harness,
    typeof Harness.prototype._id
    > {
    constructor(
        @inject('datasources.db') dataSource: DbDataSource,
    ) {
        super(Harness, dataSource);
    }
}
