import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Class } from '../models';
import { DbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class ClassRepository extends DefaultCrudRepository<
    Class,
    typeof Class.prototype._id
    > {
    constructor(
        @inject('datasources.db') dataSource: DbDataSource,
    ) {
        super(Class, dataSource);
    }
}
