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
import { Consumable } from '../models';
import { ConsumableRepository } from '../repositories';

export class ConsumableController {
  constructor(
    @repository(ConsumableRepository)
    public consumableRepository: ConsumableRepository,
  ) { }

  // @post('/consumables', {
  //   responses: {
  //     '200': {
  //       description: 'Consumable model instance',
  //       content: {'application/json': {schema: {'x-ts-type': Consumable}}},
  //     },
  //   },
  // })
  // async create(@requestBody() consumable: Consumable): Promise<Consumable> {
  //   return await this.consumableRepository.create(consumable);
  // }

  @get('/consumables/count', {
    responses: {
      '200': {
        description: 'Consumable model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Consumable)) where?: Where,
  ): Promise<Count> {
    return await this.consumableRepository.count(where);
  }

  @get('/consumables', {
    responses: {
      '200': {
        description: 'Array of Consumable model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Consumable } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Consumable)) filter?: Filter,
  ): Promise<Consumable[]> {
    return await this.consumableRepository.find(filter);
  }

  // @patch('/consumables', {
  //   responses: {
  //     '200': {
  //       description: 'Consumable PATCH success count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  // async updateAll(
  //   @requestBody() consumable: Consumable,
  //   @param.query.object('where', getWhereSchemaFor(Consumable)) where?: Where,
  // ): Promise<Count> {
  //   return await this.consumableRepository.updateAll(consumable, where);
  // }

  @get('/consumables/{id}', {
    responses: {
      '200': {
        description: 'Consumable model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Consumable } } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Consumable> {
    return await this.consumableRepository.findById(id);
  }

  // @patch('/consumables/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Consumable PATCH success',
  //     },
  //   },
  // })
  // async updateById(
  //   @param.path.number('id') id: number,
  //   @requestBody() consumable: Consumable,
  // ): Promise<void> {
  //   await this.consumableRepository.updateById(id, consumable);
  // }

  // @put('/consumables/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Consumable PUT success',
  //     },
  //   },
  // })
  // async replaceById(
  //   @param.path.number('id') id: number,
  //   @requestBody() consumable: Consumable,
  // ): Promise<void> {
  //   await this.consumableRepository.replaceById(id, consumable);
  // }

  // @del('/consumables/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Consumable DELETE success',
  //     },
  //   },
  // })
  // async deleteById(@param.path.number('id') id: number): Promise<void> {
  //   await this.consumableRepository.deleteById(id);
  // }
}
