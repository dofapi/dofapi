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
import { Set } from '../models';
import { SetRepository } from '../repositories';

export class SetController {
  constructor(
    @repository(SetRepository)
    public setRepository: SetRepository,
  ) { }

  @post('/sets', {
    responses: {
      '200': {
        description: 'Set model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Set } } },
      },
    },
  })
  async create(@requestBody() set: Set): Promise<Set> {
    return await this.setRepository.create(set);
  }

  @get('/sets/count', {
    responses: {
      '200': {
        description: 'Set model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Set)) where?: Where,
  ): Promise<Count> {
    return await this.setRepository.count(where);
  }

  @get('/sets', {
    responses: {
      '200': {
        description: 'Array of Set model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Set } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Set)) filter?: Filter,
  ): Promise<Set[]> {
    return await this.setRepository.find(filter);
  }

  // @patch('/sets', {
  //   responses: {
  //     '200': {
  //       description: 'Set PATCH success count',
  //       content: { 'application/json': { schema: CountSchema } },
  //     },
  //   },
  // })
  // async updateAll(
  //   @requestBody() set: Set,
  //   @param.query.object('where', getWhereSchemaFor(Set)) where?: Where,
  // ): Promise<Count> {
  //   return await this.setRepository.updateAll(set, where);
  // }

  @get('/sets/{id}', {
    responses: {
      '200': {
        description: 'Set model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Set } } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Set> {
    return await this.setRepository.findById(id);
  }

  // @patch('/sets/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Set PATCH success',
  //     },
  //   },
  // })
  // async updateById(
  //   @param.path.number('id') id: number,
  //   @requestBody() set: Set,
  // ): Promise<void> {
  //   await this.setRepository.updateById(id, set);
  // }

  // @put('/sets/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Set PUT success',
  //     },
  //   },
  // })
  // async replaceById(
  //   @param.path.number('id') id: number,
  //   @requestBody() set: Set,
  // ): Promise<void> {
  //   await this.setRepository.replaceById(id, set);
  // }

  // @del('/sets/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Set DELETE success',
  //     },
  //   },
  // })
  // async deleteById(@param.path.number('id') id: number): Promise<void> {
  //   await this.setRepository.deleteById(id);
  // }
}
