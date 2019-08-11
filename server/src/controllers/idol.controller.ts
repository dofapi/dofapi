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
import { Idol } from '../models';
import { IdolRepository } from '../repositories';

export class IdolController {
    constructor(
        @repository(IdolRepository)
        public idolRepository: IdolRepository,
    ) { }

    // @post('/idols', {
    //   responses: {
    //     '200': {
    //       description: 'Idol model instance',
    //       content: { 'application/json': { schema: { 'x-ts-type': Idol } } },
    //     },
    //   },
    // })
    // async create(@requestBody() idol: Idol): Promise<Idol> {
    //   return await this.idolRepository.create(idol);
    // }

    @get('/idols/count', {
        responses: {
            '200': {
                description: 'Idol model count',
                content: { 'application/json': { schema: CountSchema } },
            },
        },
    })
    async count(
        @param.query.object('where', getWhereSchemaFor(Idol)) where?: Where,
    ): Promise<Count> {
        return await this.idolRepository.count(where);
    }

    @get('/idols', {
        responses: {
            '200': {
                description: 'Array of Idol model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': Idol } },
                    },
                },
            },
        },
    })
    async find(
        @param.query.object('filter', getFilterSchemaFor(Idol)) filter?: Filter,
    ): Promise<Idol[]> {
        return await this.idolRepository.find(filter);
    }

    // @patch('/idols', {
    //   responses: {
    //     '200': {
    //       description: 'Idol PATCH success count',
    //       content: {'application/json': {schema: CountSchema}},
    //     },
    //   },
    // })
    // async updateAll(
    //   @requestBody() idol: Idol,
    //   @param.query.object('where', getWhereSchemaFor(Idol)) where?: Where,
    // ): Promise<Count> {
    //   return await this.idolRepository.updateAll(idol, where);
    // }

    @get('/idols/{id}', {
        responses: {
            '200': {
                description: 'Idol model instance',
                content: { 'application/json': { schema: { 'x-ts-type': Idol } } },
            },
        },
    })
    async findById(@param.path.number('id') id: number): Promise<Idol> {
        return await this.idolRepository.findById(id);
    }

    // @patch('/idols/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Idol PATCH success',
    //     },
    //   },
    // })
    // async updateById(
    //   @param.path.number('id') id: number,
    //   @requestBody() idol: Idol,
    // ): Promise<void> {
    //   await this.idolRepository.updateById(id, idol);
    // }

    // @put('/idols/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Idol PUT success',
    //     },
    //   },
    // })
    // async replaceById(
    //   @param.path.number('id') id: number,
    //   @requestBody() idol: Idol,
    // ): Promise<void> {
    //   await this.idolRepository.replaceById(id, idol);
    // }

    // @del('/idols/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Idol DELETE success',
    //     },
    //   },
    // })
    // async deleteById(@param.path.number('id') id: number): Promise<void> {
    //   await this.idolRepository.deleteById(id);
    // }
}
