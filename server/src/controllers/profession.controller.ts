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
import { Profession } from '../models';
import { ProfessionRepository } from '../repositories';

export class ProfessionController {
    constructor(
        @repository(ProfessionRepository)
        public professionRepository: ProfessionRepository,
    ) { }

    // @post('/professions', {
    //   responses: {
    //     '200': {
    //       description: 'Profession model instance',
    //       content: { 'application/json': { schema: { 'x-ts-type': Profession } } },
    //     },
    //   },
    // })
    // async create(@requestBody() profession: Profession): Promise<Profession> {
    //   return await this.professionRepository.create(profession);
    // }

    @get('/professions/count', {
        responses: {
            '200': {
                description: 'Profession model count',
                content: { 'application/json': { schema: CountSchema } },
            },
        },
    })
    async count(
        @param.query.object('where', getWhereSchemaFor(Profession)) where?: Where,
    ): Promise<Count> {
        return await this.professionRepository.count(where);
    }

    @get('/professions', {
        responses: {
            '200': {
                description: 'Array of Profession model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': Profession } },
                    },
                },
            },
        },
    })
    async find(
        @param.query.object('filter', getFilterSchemaFor(Profession)) filter?: Filter,
    ): Promise<Profession[]> {
        return await this.professionRepository.find(filter);
    }

    // @patch('/professions', {
    //   responses: {
    //     '200': {
    //       description: 'Profession PATCH success count',
    //       content: {'application/json': {schema: CountSchema}},
    //     },
    //   },
    // })
    // async updateAll(
    //   @requestBody() profession: Profession,
    //   @param.query.object('where', getWhereSchemaFor(Profession)) where?: Where,
    // ): Promise<Count> {
    //   return await this.professionRepository.updateAll(profession, where);
    // }

    @get('/professions/{id}', {
        responses: {
            '200': {
                description: 'Profession model instance',
                content: { 'application/json': { schema: { 'x-ts-type': Profession } } },
            },
        },
    })
    async findById(@param.path.number('id') id: number): Promise<Profession> {
        return await this.professionRepository.findById(id);
    }

    // @patch('/professions/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Profession PATCH success',
    //     },
    //   },
    // })
    // async updateById(
    //   @param.path.number('id') id: number,
    //   @requestBody() profession: Profession,
    // ): Promise<void> {
    //   await this.professionRepository.updateById(id, profession);
    // }

    // @put('/professions/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Profession PUT success',
    //     },
    //   },
    // })
    // async replaceById(
    //   @param.path.number('id') id: number,
    //   @requestBody() profession: Profession,
    // ): Promise<void> {
    //   await this.professionRepository.replaceById(id, profession);
    // }

    // @del('/professions/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Profession DELETE success',
    //     },
    //   },
    // })
    // async deleteById(@param.path.number('id') id: number): Promise<void> {
    //   await this.professionRepository.deleteById(id);
    // }
}
