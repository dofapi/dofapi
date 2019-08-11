import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Profession } from '../models';
import { DbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class ProfessionRepository extends DefaultCrudRepository<
    Profession,
    typeof Profession.prototype._id
    > {
    constructor(
        @inject('datasources.db') dataSource: DbDataSource,
    ) {
        super(Profession, dataSource);
    }
}
