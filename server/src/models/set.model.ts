import { model, property, hasMany } from '@loopback/repository';
import { Equipment, Weapon } from '../models';
import { Item } from './item.model';

@model()
export class Set extends Item {
  @property({
    type: 'array',
    itemType: 'object',
  })
  bonus?: object[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  equipment_id?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  weapon_id?: string[];

  @hasMany(() => Equipment)
  equipments?: Equipment[];

  @hasMany(() => Weapon)
  weapons?: Weapon[];

  constructor(data?: Partial<Set>) {
    super(data);
  }
}
