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
import { Classe } from '../models';
import { ClasseRepository } from '../repositories';

export class ClasseController {
    constructor(
        @repository(ClasseRepository)
        public classeRepository: ClasseRepository,
    ) { }

    // @post('/classes', {
    //   responses: {
    //     '200': {
    //       description: 'Classe model instance',
    //       content: { 'application/json': { schema: { 'x-ts-type': Classe } } },
    //     },
    //   },
    // })
    // async create(@requestBody() classe: Classe): Promise<Classe> {
    //   return await this.classeRepository.create(classe);
    // }

    @get('/classes/count', {
        responses: {
            '200': {
                description: 'Classe model count',
                content: { 'application/json': { schema: CountSchema } },
            },
        },
    })
    async count(
        @param.query.object('where', getWhereSchemaFor(Classe)) where?: Where,
    ): Promise<Count> {
        return await this.classeRepository.count(where);
    }

    @get('/classes', {
        responses: {
            '200': {
                description: 'Array of Classe model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': Classe } },
                    },
                },
            },
        },
    })
    async find(
        @param.query.object('filter', getFilterSchemaFor(Classe)) filter?: Filter,
    ): Promise<Classe[]> {
        return await this.classeRepository.find(filter);
    }

    // @patch('/classes', {
    //   responses: {
    //     '200': {
    //       description: 'Classe PATCH success count',
    //       content: {'application/json': {schema: CountSchema}},
    //     },
    //   },
    // })
    // async updateAll(
    //   @requestBody() classe: Classe,
    //   @param.query.object('where', getWhereSchemaFor(Classe)) where?: Where,
    // ): Promise<Count> {
    //   return await this.classeRepository.updateAll(classe, where);
    // }

    @get('/classes/{id}', {
        responses: {
            '200': {
                description: 'Classe model instance',
                content: { 'application/json': { schema: { 'x-ts-type': Classe } } },
            },
        },
    })
    async findById(@param.path.number('id') id: number): Promise<Classe> {
        return await this.classeRepository.findById(id);
    }

    // @patch('/classes/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Classe PATCH success',
    //     },
    //   },
    // })
    // async updateById(
    //   @param.path.number('id') id: number,
    //   @requestBody() classe: Classe,
    // ): Promise<void> {
    //   await this.classeRepository.updateById(id, classe);
    // }

    // @put('/classes/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Classe PUT success',
    //     },
    //   },
    // })
    // async replaceById(
    //   @param.path.number('id') id: number,
    //   @requestBody() classe: Classe,
    // ): Promise<void> {
    //   await this.classeRepository.replaceById(id, classe);
    // }

    // @del('/classes/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Classe DELETE success',
    //     },
    //   },
    // })
    // async deleteById(@param.path.number('id') id: number): Promise<void> {
    //   await this.classeRepository.deleteById(id);
    // }
}
