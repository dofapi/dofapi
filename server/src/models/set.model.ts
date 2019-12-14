import { model, property, hasMany } from '@loopback/repository';
import { Equipment, Weapon } from '../models';
import { Item } from './item.model';

@model()
export class Set extends Item {
  @property({
    type: 'object',
  })
  bonus?: object;

  @property({
    type: 'number',
  })
  equipment_id?: number;

  @property({
    type: 'number',
  })
  weapon_id?: number;

  @hasMany(() => Equipment)
  equipments?: Equipment[];

  @hasMany(() => Weapon)
  weapons?: Weapon[];

  constructor(data?: Partial<Set>) {
    super(data);
  }
}
