import {
    Count,
    CountSchema,
    Filter,
    repository,
    Where,
} from '@loopback/repository';
import {
    post,
    param,
    get,
    getFilterSchemaFor,
    getWhereSchemaFor,
    patch,
    put,
    del,
    requestBody,
} from '@loopback/rest';
import { Monster } from '../models';
import { MonsterRepository } from '../repositories';

export class MonsterController {
    constructor(
        @repository(MonsterRepository)
        public monsterRepository: MonsterRepository,
    ) { }

    // @post('/monsters', {
    //   responses: {
    //     '200': {
    //       description: 'Monster model instance',
    //       content: { 'application/json': { schema: { 'x-ts-type': Monster } } },
    //     },
    //   },
    // })
    // async create(@requestBody() monster: Monster): Promise<Monster> {
    //   return await this.monsterRepository.create(monster);
    // }

    @get('/monsters/count', {
        responses: {
            '200': {
                description: 'Monster model count',
                content: { 'application/json': { schema: CountSchema } },
            },
        },
    })
    async count(
        @param.query.object('where', getWhereSchemaFor(Monster)) where?: Where,
    ): Promise<Count> {
        return await this.monsterRepository.count(where);
    }

    @get('/monsters', {
        responses: {
            '200': {
                description: 'Array of Monster model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': Monster } },
                    },
                },
            },
        },
    })
    async find(
        @param.query.object('filter', getFilterSchemaFor(Monster)) filter?: Filter,
    ): Promise<Monster[]> {
        return await this.monsterRepository.find(filter);
    }

    // @patch('/monsters', {
    //   responses: {
    //     '200': {
    //       description: 'Monster PATCH success count',
    //       content: {'application/json': {schema: CountSchema}},
    //     },
    //   },
    // })
    // async updateAll(
    //   @requestBody() monster: Monster,
    //   @param.query.object('where', getWhereSchemaFor(Monster)) where?: Where,
    // ): Promise<Count> {
    //   return await this.monsterRepository.updateAll(monster, where);
    // }

    @get('/monsters/{id}', {
        responses: {
            '200': {
                description: 'Monster model instance',
                content: { 'application/json': { schema: { 'x-ts-type': Monster } } },
            },
        },
    })
    async findById(@param.path.number('id') id: number): Promise<Monster> {
        return await this.monsterRepository.findById(id);
    }

    // @patch('/monsters/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Monster PATCH success',
    //     },
    //   },
    // })
    // async updateById(
    //   @param.path.number('id') id: number,
    //   @requestBody() monster: Monster,
    // ): Promise<void> {
    //   await this.monsterRepository.updateById(id, monster);
    // }

    // @put('/monsters/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Monster PUT success',
    //     },
    //   },
    // })
    // async replaceById(
    //   @param.path.number('id') id: number,
    //   @requestBody() monster: Monster,
    // ): Promise<void> {
    //   await this.monsterRepository.replaceById(id, monster);
    // }

    // @del('/monsters/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Monster DELETE success',
    //     },
    //   },
    // })
    // async deleteById(@param.path.number('id') id: number): Promise<void> {
    //   await this.monsterRepository.deleteById(id);
    // }
}
