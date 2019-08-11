import { model, property } from '@loopback/repository';
import { Item } from './item.model';

@model()
export class Class extends Item {
  @property({
    type: 'string',
  })
  category?: object[];

  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'string',
  })
  videoUrl?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  roles?: string[];

  @property({
    type: 'array',
    itemType: 'object',
  })
  spells?: object[];

  @property({
    type: 'string',
  })
  maleImg?: string;

  @property({
    type: 'string',
  })
  femaleImg?: string;

  constructor(data?: Partial<Class>) {
    super(data);
  }
}
