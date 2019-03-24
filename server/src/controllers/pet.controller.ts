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
import { Pet } from '../models';
import { PetRepository } from '../repositories';

export class PetController {
  constructor(
    @repository(PetRepository)
    public petRepository: PetRepository,
  ) { }

  // @post('/pets', {
  //   responses: {
  //     '200': {
  //       description: 'Pet model instance',
  //       content: {'application/json': {schema: {'x-ts-type': Pet}}},
  //     },
  //   },
  // })
  // async create(@requestBody() pet: Pet): Promise<Pet> {
  //   return await this.petRepository.create(pet);
  // }

  @get('/pets/count', {
    responses: {
      '200': {
        description: 'Pet model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Pet)) where?: Where,
  ): Promise<Count> {
    return await this.petRepository.count(where);
  }

  @get('/pets', {
    responses: {
      '200': {
        description: 'Array of Pet model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Pet } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Pet)) filter?: Filter,
  ): Promise<Pet[]> {
    return await this.petRepository.find(filter);
  }

  // @patch('/pets', {
  //   responses: {
  //     '200': {
  //       description: 'Pet PATCH success count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  // async updateAll(
  //   @requestBody() pet: Pet,
  //   @param.query.object('where', getWhereSchemaFor(Pet)) where?: Where,
  // ): Promise<Count> {
  //   return await this.petRepository.updateAll(pet, where);
  // }

  @get('/pets/{id}', {
    responses: {
      '200': {
        description: 'Pet model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Pet } } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Pet> {
    return await this.petRepository.findById(id);
  }

  // @patch('/pets/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Pet PATCH success',
  //     },
  //   },
  // })
  // async updateById(
  //   @param.path.number('id') id: number,
  //   @requestBody() pet: Pet,
  // ): Promise<void> {
  //   await this.petRepository.updateById(id, pet);
  // }

  // @put('/pets/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Pet PUT success',
  //     },
  //   },
  // })
  // async replaceById(
  //   @param.path.number('id') id: number,
  //   @requestBody() pet: Pet,
  // ): Promise<void> {
  //   await this.petRepository.replaceById(id, pet);
  // }

  // @del('/pets/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Pet DELETE success',
  //     },
  //   },
  // })
  // async deleteById(@param.path.number('id') id: number): Promise<void> {
  //   await this.petRepository.deleteById(id);
  // }
}
