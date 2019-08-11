import { model, property } from '@loopback/repository';
import { Item } from '.';

@model()
export class Monster extends Item {
    @property({
        type: 'array',
        itemType: 'object',
    })
    statistics?: object[];

    @property({
        type: 'array',
        itemType: 'object',
    })
    resistances?: object[];

    @property({
        type: 'array',
        itemType: 'string',
    })
    areas?: string[];

    @property({
        type: 'array',
        itemType: 'object',
    })
    drops?: object[];

    constructor(data?: Partial<Monster>) {
        super(data);
    }
}
