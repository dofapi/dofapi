import { model, property } from '@loopback/repository';
import { Item } from './item.model';

@model()
export class Pet extends Item {
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
    itemType: 'string',
  })
  maxstats?: string[];

  constructor(data?: Partial<Pet>) {
    super(data);
  }
}
