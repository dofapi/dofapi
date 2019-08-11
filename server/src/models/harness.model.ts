import { model, property } from '@loopback/repository';
import { Item } from './item.model';

@model()
export class Harness extends Item {
    @property({
        type: 'array',
        itemType: 'object',
    })
    recipe?: object[];

    constructor(data?: Partial<Harness>) {
        super(data);
    }
}
