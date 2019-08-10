import { Getter, inject } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory, juggler, repository } from '@loopback/repository';
import { Set, Equipment, Weapon } from '../models';
import { EquipmentRepository } from './equipment.repository';
import { WeaponRepository } from './weapon.repository';
import { DbDataSource } from '../datasources';

export class SetRepository extends DefaultCrudRepository<Set, typeof Set.prototype._id> {
  public readonly equipments: HasManyRepositoryFactory<Equipment, typeof Set.prototype._id>;
  public readonly weapons: HasManyRepositoryFactory<Weapon, typeof Set.prototype._id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter(EquipmentRepository)
    protected equipmentRepositoryGetter: Getter<EquipmentRepository>,
    @repository.getter(WeaponRepository)
    protected weaponRepositoryGetter: Getter<WeaponRepository>,
  ) {
    super(Set, dataSource);
    this.equipments = this.createHasManyRepositoryFactoryFor(
      'equipments',
      equipmentRepositoryGetter,
    );
    this.weapons = this.createHasManyRepositoryFactoryFor(
      'weapons',
      weaponRepositoryGetter,
    );
  }

  public findByName(name: string) {
    return this.findOne({ where: { name } });
  }
}
