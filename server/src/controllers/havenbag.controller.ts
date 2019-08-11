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
import { Havenbag } from '../models';
import { HavenbagRepository } from '../repositories';

export class HavenbagController {
    constructor(
        @repository(HavenbagRepository)
        public havenbagRepository: HavenbagRepository,
    ) { }

    // @post('/havenbags', {
    //   responses: {
    //     '200': {
    //       description: 'Havenbag model instance',
    //       content: { 'application/json': { schema: { 'x-ts-type': Havenbag } } },
    //     },
    //   },
    // })
    // async create(@requestBody() havenbag: Havenbag): Promise<Havenbag> {
    //   return await this.havenbagRepository.create(havenbag);
    // }

    @get('/havenbags/count', {
        responses: {
            '200': {
                description: 'Havenbag model count',
                content: { 'application/json': { schema: CountSchema } },
            },
        },
    })
    async count(
        @param.query.object('where', getWhereSchemaFor(Havenbag)) where?: Where,
    ): Promise<Count> {
        return await this.havenbagRepository.count(where);
    }

    @get('/havenbags', {
        responses: {
            '200': {
                description: 'Array of Havenbag model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': Havenbag } },
                    },
                },
            },
        },
    })
    async find(
        @param.query.object('filter', getFilterSchemaFor(Havenbag)) filter?: Filter,
    ): Promise<Havenbag[]> {
        return await this.havenbagRepository.find(filter);
    }

    // @patch('/havenbags', {
    //   responses: {
    //     '200': {
    //       description: 'Havenbag PATCH success count',
    //       content: {'application/json': {schema: CountSchema}},
    //     },
    //   },
    // })
    // async updateAll(
    //   @requestBody() havenbag: Havenbag,
    //   @param.query.object('where', getWhereSchemaFor(Havenbag)) where?: Where,
    // ): Promise<Count> {
    //   return await this.havenbagRepository.updateAll(havenbag, where);
    // }

    @get('/havenbags/{id}', {
        responses: {
            '200': {
                description: 'Havenbag model instance',
                content: { 'application/json': { schema: { 'x-ts-type': Havenbag } } },
            },
        },
    })
    async findById(@param.path.number('id') id: number): Promise<Havenbag> {
        return await this.havenbagRepository.findById(id);
    }

    // @patch('/havenbags/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Havenbag PATCH success',
    //     },
    //   },
    // })
    // async updateById(
    //   @param.path.number('id') id: number,
    //   @requestBody() havenbag: Havenbag,
    // ): Promise<void> {
    //   await this.havenbagRepository.updateById(id, havenbag);
    // }

    // @put('/havenbags/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Havenbag PUT success',
    //     },
    //   },
    // })
    // async replaceById(
    //   @param.path.number('id') id: number,
    //   @requestBody() havenbag: Havenbag,
    // ): Promise<void> {
    //   await this.havenbagRepository.replaceById(id, havenbag);
    // }

    // @del('/havenbags/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Havenbag DELETE success',
    //     },
    //   },
    // })
    // async deleteById(@param.path.number('id') id: number): Promise<void> {
    //   await this.havenbagRepository.deleteById(id);
    // }
}
