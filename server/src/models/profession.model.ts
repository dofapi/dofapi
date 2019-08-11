import { model, property } from '@loopback/repository';
import { Item } from '.';

@model()
export class Profession extends Item {
    @property({
        type: 'array',
        itemType: 'object',
    })
    harvests?: object[];

    @property({
        type: 'array',
        itemType: 'object',
    })
    recipe?: object[];

    constructor(data?: Partial<Profession>) {
        super(data);
    }
}
