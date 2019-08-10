import { Entity, model, property } from '@loopback/repository';

@model()
export class Item extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  _id: number;

  @property({
    type: 'number',
  })
  ankamaId?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'number',
  })
  level?: number;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'string',
  })
  imgUrl?: string;

  @property({
    type: 'string',
  })
  url?: string;

  @property({
    type: 'string',
  })
  description?: string;

  constructor(data?: Partial<Item>) {
    super(data);
  }
}
