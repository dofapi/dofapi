import {model, property} from '@loopback/repository';
import {Item} from '.';

@model()
export class Consumable extends Item {
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
  recipe?: object[];

  constructor(data?: Partial<Consumable>) {
    super(data);
  }
}
