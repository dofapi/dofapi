import { model, property } from '@loopback/repository';
import { Item } from '.';

@model()
export class Idol extends Item {
    @property({
        type: 'array',
        itemType: 'object',
    })
    statistics?: object[];

    @property({
        type: 'string',
    })
    spells?: string;

    @property({
        type: 'array',
        itemType: 'object',
    })
    bonus?: object[];

    @property({
        type: 'array',
        itemType: 'object',
    })
    recipe?: object[];

    constructor(data?: Partial<Idol>) {
        super(data);
    }
}
