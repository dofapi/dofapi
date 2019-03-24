import {model, property} from '@loopback/repository';
import {Item} from '.';

@model()
export class Mount extends Item {
  @property({
    type: 'array',
    itemType: 'object',
  })
  stats?: object[];

  @property({
    type: 'array',
    itemType: 'object',
  })
  characteristic?: object[];

  constructor(data?: Partial<Mount>) {
    super(data);
  }
}
