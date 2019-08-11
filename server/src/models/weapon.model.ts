import { model, property, belongsTo } from '@loopback/repository';
import { Item } from './item.model';
import { Set } from './set.model';

@model()
export class Weapon extends Item {
  @property({
    type: 'array',
    itemType: 'object',
  })
  statistics?: object[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  conditions?: string[];

  @property({
    itemType: 'object',
  })
  characteristics?: object;

  @property({
    type: 'array',
    itemType: 'object',
  })
  recipe?: object[];

  @belongsTo(() => Set)
  setId: number;

  getId() {
    return this._id;
  }

  constructor(data?: Partial<Weapon>) {
    super(data);
  }
}
