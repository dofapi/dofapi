import { model, property, belongsTo } from '@loopback/repository';
import { Item } from './item.model';
import { Set } from './set.model';

@model()
export class Weapon extends Item {
  @property({
    type: 'array',
    itemType: 'object',
  })
  stats?: object[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  condition?: string[];

  @property({
    type: 'array',
    itemType: 'object',
  })
  characteristic?: object[];

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
