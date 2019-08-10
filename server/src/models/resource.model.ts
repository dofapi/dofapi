import { model, property } from '@loopback/repository';
import { Item } from '.';

@model()
export class Resource extends Item {
  @property({
    type: 'array',
    itemType: 'object',
  })
  recipe?: object[];

  constructor(data?: Partial<Resource>) {
    super(data);
  }
}
