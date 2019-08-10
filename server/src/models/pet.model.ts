import { model, property } from '@loopback/repository';
import { Item } from './item.model';

@model()
export class Pet extends Item {
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

  constructor(data?: Partial<Pet>) {
    super(data);
  }
}
