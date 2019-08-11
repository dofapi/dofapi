import { model, property } from '@loopback/repository';
import { Item } from './item.model';

@model()
export class Havenbag extends Item {
    @property({
        type: 'array',
        itemType: 'string',
    })
    furnitures?: string[];

    @property({
        type: 'array',
        itemType: 'string',
    })
    decors?: string[];

    @property({
        type: 'array',
        itemType: 'string',
    })
    grounds?: string[];

    constructor(data?: Partial<Havenbag>) {
        super(data);
    }
}
