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
import { Harness } from '../models';
import { HarnessRepository } from '../repositories';

export class HarnessController {
    constructor(
        @repository(HarnessRepository)
        public harnessRepository: HarnessRepository,
    ) { }

    // @post('/harnesss', {
    //   responses: {
    //     '200': {
    //       description: 'Harness model instance',
    //       content: { 'application/json': { schema: { 'x-ts-type': Harness } } },
    //     },
    //   },
    // })
    // async create(@requestBody() harness: Harness): Promise<Harness> {
    //   return await this.harnessRepository.create(harness);
    // }

    @get('/harnesses/count', {
        responses: {
            '200': {
                description: 'Harness model count',
                content: { 'application/json': { schema: CountSchema } },
            },
        },
    })
    async count(
        @param.query.object('where', getWhereSchemaFor(Harness)) where?: Where,
    ): Promise<Count> {
        return await this.harnessRepository.count(where);
    }

    @get('/harnesses', {
        responses: {
            '200': {
                description: 'Array of Harness model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': Harness } },
                    },
                },
            },
        },
    })
    async find(
        @param.query.object('filter', getFilterSchemaFor(Harness)) filter?: Filter,
    ): Promise<Harness[]> {
        return await this.harnessRepository.find(filter);
    }

    // @patch('/harnesses', {
    //   responses: {
    //     '200': {
    //       description: 'Harness PATCH success count',
    //       content: {'application/json': {schema: CountSchema}},
    //     },
    //   },
    // })
    // async updateAll(
    //   @requestBody() harness: Harness,
    //   @param.query.object('where', getWhereSchemaFor(Harness)) where?: Where,
    // ): Promise<Count> {
    //   return await this.harnessRepository.updateAll(harness, where);
    // }

    @get('/harnesses/{id}', {
        responses: {
            '200': {
                description: 'Harness model instance',
                content: { 'application/json': { schema: { 'x-ts-type': Harness } } },
            },
        },
    })
    async findById(@param.path.number('id') id: number): Promise<Harness> {
        return await this.harnessRepository.findById(id);
    }

    // @patch('/harnesses/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Harness PATCH success',
    //     },
    //   },
    // })
    // async updateById(
    //   @param.path.number('id') id: number,
    //   @requestBody() harness: Harness,
    // ): Promise<void> {
    //   await this.harnessRepository.updateById(id, harness);
    // }

    // @put('/harnesses/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Harness PUT success',
    //     },
    //   },
    // })
    // async replaceById(
    //   @param.path.number('id') id: number,
    //   @requestBody() harness: Harness,
    // ): Promise<void> {
    //   await this.harnessRepository.replaceById(id, harness);
    // }

    // @del('/harnesses/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Harness DELETE success',
    //     },
    //   },
    // })
    // async deleteById(@param.path.number('id') id: number): Promise<void> {
    //   await this.harnessRepository.deleteById(id);
    // }
}
