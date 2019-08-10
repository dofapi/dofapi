import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import { SetRepository } from '../repositories';
import {
  del,
  get,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import { Equipment } from '../models';


export class SetEquipmentsController {
  constructor(
    @repository(SetRepository) protected setRepo: SetRepository,
  ) { }

  // @post('/sets/{id}/equipments')
  // async create(@param.path.number('id') id: number, @requestBody() equipment: Equipment) {
  //   return await this.setRepo.equipments(id).create(equipment);
  // }

  @get('/set/{id}/equipments', {
    responses: {
      '200': {
        description: "Array of equipment's belonging to set",
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Equipment } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter,
  ): Promise<Equipment[]> {
    return await this.setRepo.equipments(id).find(filter);
  }

  // @patch('/sets/{id}/equipments', {
  //   responses: {
  //     '200': {
  //       description: 'Set.Equipment PATCH success count',
  //       content: { 'application/json': { schema: CountSchema } },
  //     },
  //   },
  // })
  // async patch(
  //   @param.path.number('id') id: number,
  //   @requestBody() equipment: Partial<Equipment>,
  //   @param.query.object('where', getWhereSchemaFor(Equipment)) where?: Where,
  // ): Promise<Count> {
  //   return await this.setRepo.equipments(id).patch(equipment, where);
  // }

  // @del('/sets/{id}/equipments', {
  //   responses: {
  //     '200': {
  //       description: 'Set.Equipment DELETE success count',
  //       content: { 'application/json': { schema: CountSchema } },
  //     },
  //   },
  // })
  // async delete(
  //   @param.path.number('id') id: number,
  //   @param.query.object('where', getWhereSchemaFor(Equipment)) where?: Where,
  // ): Promise<Count> {
  //   return await this.setRepo.equipments(id).delete(where);
  // }
}
