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
import { Resource } from '../models';
import { ResourceRepository } from '../repositories';

export class ResourceController {
  constructor(
    @repository(ResourceRepository)
    public resourceRepository: ResourceRepository,
  ) { }

  // @post('/resources', {
  //   responses: {
  //     '200': {
  //       description: 'Resource model instance',
  //       content: {'application/json': {schema: {'x-ts-type': Resource}}},
  //     },
  //   },
  // })
  // async create(@requestBody() resource: Resource): Promise<Resource> {
  //   return await this.resourceRepository.create(resource);
  // }

  @get('/resources/count', {
    responses: {
      '200': {
        description: 'Resource model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Resource)) where?: Where,
  ): Promise<Count> {
    return await this.resourceRepository.count(where);
  }

  @get('/resources', {
    responses: {
      '200': {
        description: 'Array of Resource model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Resource } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Resource)) filter?: Filter,
  ): Promise<Resource[]> {
    return await this.resourceRepository.find(filter);
  }

  // @patch('/resources', {
  //   responses: {
  //     '200': {
  //       description: 'Resource PATCH success count',
  //       content: { 'application/json': { schema: CountSchema } },
  //     },
  //   },
  // })
  // async updateAll(
  //   @requestBody() resource: Resource,
  //   @param.query.object('where', getWhereSchemaFor(Resource)) where?: Where,
  // ): Promise<Count> {
  //   return await this.resourceRepository.updateAll(resource, where);
  // }

  @get('/resources/{id}', {
    responses: {
      '200': {
        description: 'Resource model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Resource } } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Resource> {
    return await this.resourceRepository.findById(id);
  }

  // @patch('/resources/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Resource PATCH success',
  //     },
  //   },
  // })
  // async updateById(
  //   @param.path.number('id') id: number,
  //   @requestBody() resource: Resource,
  // ): Promise<void> {
  //   await this.resourceRepository.updateById(id, resource);
  // }

  // @put('/resources/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Resource PUT success',
  //     },
  //   },
  // })
  // async replaceById(
  //   @param.path.number('id') id: number,
  //   @requestBody() resource: Resource,
  // ): Promise<void> {
  //   await this.resourceRepository.replaceById(id, resource);
  // }

  // @del('/resources/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Resource DELETE success',
  //     },
  //   },
  // })
  // async deleteById(@param.path.number('id') id: number): Promise<void> {
  //   await this.resourceRepository.deleteById(id);
  // }
}
