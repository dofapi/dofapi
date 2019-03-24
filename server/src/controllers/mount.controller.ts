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
import { Mount } from '../models';
import { MountRepository } from '../repositories';

export class MountController {
  constructor(
    @repository(MountRepository)
    public mountRepository: MountRepository,
  ) { }

  // @post('/mounts', {
  //   responses: {
  //     '200': {
  //       description: 'Mount model instance',
  //       content: { 'application/json': { schema: { 'x-ts-type': Mount } } },
  //     },
  //   },
  // })
  // async create(@requestBody() mount: Mount): Promise<Mount> {
  //   return await this.mountRepository.create(mount);
  // }

  @get('/mounts/count', {
    responses: {
      '200': {
        description: 'Mount model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Mount)) where?: Where,
  ): Promise<Count> {
    return await this.mountRepository.count(where);
  }

  @get('/mounts', {
    responses: {
      '200': {
        description: 'Array of Mount model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Mount } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Mount)) filter?: Filter,
  ): Promise<Mount[]> {
    return await this.mountRepository.find(filter);
  }

  // @patch('/mounts', {
  //   responses: {
  //     '200': {
  //       description: 'Mount PATCH success count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  // async updateAll(
  //   @requestBody() mount: Mount,
  //   @param.query.object('where', getWhereSchemaFor(Mount)) where?: Where,
  // ): Promise<Count> {
  //   return await this.mountRepository.updateAll(mount, where);
  // }

  @get('/mounts/{id}', {
    responses: {
      '200': {
        description: 'Mount model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Mount } } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Mount> {
    return await this.mountRepository.findById(id);
  }

  // @patch('/mounts/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Mount PATCH success',
  //     },
  //   },
  // })
  // async updateById(
  //   @param.path.number('id') id: number,
  //   @requestBody() mount: Mount,
  // ): Promise<void> {
  //   await this.mountRepository.updateById(id, mount);
  // }

  // @put('/mounts/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Mount PUT success',
  //     },
  //   },
  // })
  // async replaceById(
  //   @param.path.number('id') id: number,
  //   @requestBody() mount: Mount,
  // ): Promise<void> {
  //   await this.mountRepository.replaceById(id, mount);
  // }

  // @del('/mounts/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Mount DELETE success',
  //     },
  //   },
  // })
  // async deleteById(@param.path.number('id') id: number): Promise<void> {
  //   await this.mountRepository.deleteById(id);
  // }
}
