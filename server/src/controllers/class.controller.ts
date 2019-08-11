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
import { Class } from '../models';
import { ClassRepository } from '../repositories';

export class ClassController {
    constructor(
        @repository(ClassRepository)
        public classRepository: ClassRepository,
    ) { }

    // @post('/classs', {
    //   responses: {
    //     '200': {
    //       description: 'Class model instance',
    //       content: { 'application/json': { schema: { 'x-ts-type': Class } } },
    //     },
    //   },
    // })
    // async create(@requestBody() class: Class): Promise<Class> {
    //   return await this.classRepository.create(class);
    // }

    @get('/classs/count', {
        responses: {
            '200': {
                description: 'Class model count',
                content: { 'application/json': { schema: CountSchema } },
            },
        },
    })
    async count(
        @param.query.object('where', getWhereSchemaFor(Class)) where?: Where,
    ): Promise<Count> {
        return await this.classRepository.count(where);
    }

    @get('/classs', {
        responses: {
            '200': {
                description: 'Array of Class model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': Class } },
                    },
                },
            },
        },
    })
    async find(
        @param.query.object('filter', getFilterSchemaFor(Class)) filter?: Filter,
    ): Promise<Class[]> {
        return await this.classRepository.find(filter);
    }

    // @patch('/classs', {
    //   responses: {
    //     '200': {
    //       description: 'Class PATCH success count',
    //       content: {'application/json': {schema: CountSchema}},
    //     },
    //   },
    // })
    // async updateAll(
    //   @requestBody() class: Class,
    //   @param.query.object('where', getWhereSchemaFor(Class)) where?: Where,
    // ): Promise<Count> {
    //   return await this.classRepository.updateAll(class, where);
    // }

    @get('/classs/{id}', {
        responses: {
            '200': {
                description: 'Class model instance',
                content: { 'application/json': { schema: { 'x-ts-type': Class } } },
            },
        },
    })
    async findById(@param.path.number('id') id: number): Promise<Class> {
        return await this.classRepository.findById(id);
    }

    // @patch('/classs/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Class PATCH success',
    //     },
    //   },
    // })
    // async updateById(
    //   @param.path.number('id') id: number,
    //   @requestBody() class: Class,
    // ): Promise<void> {
    //   await this.classRepository.updateById(id, class);
    // }

    // @put('/classs/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Class PUT success',
    //     },
    //   },
    // })
    // async replaceById(
    //   @param.path.number('id') id: number,
    //   @requestBody() class: Class,
    // ): Promise<void> {
    //   await this.classRepository.replaceById(id, class);
    // }

    // @del('/classs/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Class DELETE success',
    //     },
    //   },
    // })
    // async deleteById(@param.path.number('id') id: number): Promise<void> {
    //   await this.classRepository.deleteById(id);
    // }
}
