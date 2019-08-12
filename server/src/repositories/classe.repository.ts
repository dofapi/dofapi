import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Classe } from '../models';
import { DbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class ClasseRepository extends DefaultCrudRepository<
    Classe,
    typeof Classe.prototype._id
    > {
    constructor(
        @inject('datasources.db') dataSource: DbDataSource,
    ) {
        super(Classe, dataSource);
    }
}
