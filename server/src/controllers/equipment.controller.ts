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
import { Equipment, Set } from '../models';
import { EquipmentRepository } from '../repositories';

export class EquipmentController {
  constructor(
    @repository(EquipmentRepository)
    protected equipmentRepository: EquipmentRepository,
  ) { }

  // @post('/equipment', {
  //   responses: {
  //     '200': {
  //       description: 'Equipment model instance',
  //       content: { 'application/json': { schema: { 'x-ts-type': Equipment } } },
  //     },
  //   },
  // })
  // async create(@requestBody() equipment: Equipment): Promise<Equipment> {
  //   return await this.equipmentRepository.create(equipment);
  // }

  @get('/equipments/count', {
    responses: {
      '200': {
        description: 'Equipment model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Equipment)) where?: Where,
  ): Promise<Count> {
    return await this.equipmentRepository.count(where);
  }

  @get('/equipments', {
    responses: {
      '200': {
        description: 'Array of Equipment model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Equipment } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Equipment)) filter?: Filter,
  ): Promise<Equipment[]> {
    return await this.equipmentRepository.find(filter);
  }

  // @patch('/equipments', {
  //   responses: {
  //     '200': {
  //       description: 'Equipment PATCH success count',
  //       content: { 'application/json': { schema: CountSchema } },
  //     },
  //   },
  // })
  // async updateAll(
  //   @requestBody() equipment: Equipment,
  //   @param.query.object('where', getWhereSchemaFor(Equipment)) where?: Where,
  // ): Promise<Count> {
  //   return await this.equipmentRepository.updateAll(equipment, where);
  // }

  @get('/equipments/{id}', {
    responses: {
      '200': {
        description: 'Equipment model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Equipment } } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Equipment> {
    return await this.equipmentRepository.findById(id);
  }

  // @patch('/equipments/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Equipment PATCH success',
  //     },
  //   },
  // })
  // async updateById(
  //   @param.path.number('id') id: number,
  //   @requestBody() equipment: Equipment,
  // ): Promise<void> {
  //   await this.equipmentRepository.updateById(id, equipment);
  // }

  // @put('/equipments/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Equipment PUT success',
  //     },
  //   },
  // })
  // async replaceById(
  //   @param.path.number('id') id: number,
  //   @requestBody() equipment: Equipment,
  // ): Promise<void> {
  //   await this.equipmentRepository.replaceById(id, equipment);
  // }

  // @del('/equipments/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Equipment DELETE success',
  //     },
  //   },
  // })
  // async deleteById(@param.path.number('id') id: number): Promise<void> {
  //   await this.equipmentRepository.deleteById(id);
  // }

  @get('/equipments/{id}/set', {
    responses: {
      '200': {
        description: 'Set model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Set } } },
      },
    },
  })
  async findOwningList(@param.path.number('id') id: number): Promise<Set> {
    return await this.equipmentRepository.set(id);
  }
}
