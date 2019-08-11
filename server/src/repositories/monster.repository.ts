import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Monster } from '../models';
import { DbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class MonsterRepository extends DefaultCrudRepository<
    Monster,
    typeof Monster.prototype._id
    > {
    constructor(
        @inject('datasources.db') dataSource: DbDataSource,
    ) {
        super(Monster, dataSource);
    }
}
