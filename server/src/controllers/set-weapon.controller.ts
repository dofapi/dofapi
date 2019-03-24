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
import { Weapon } from '../models';

export class SetWeaponController {
  constructor(
    @repository(SetRepository) protected setRepo: SetRepository,
  ) { }

  // @post('/sets/{id}/weapons')
  // async create(@param.path.number('id') id: number, @requestBody() weapon: Weapon) {
  //   return await this.setRepo.weapons(id).create(weapon);
  // }

  @get('/sets/{id}/weapons', {
    responses: {
      '200': {
        description: "Array of weapon's belonging to set",
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Weapon } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter,
  ): Promise<Weapon[]> {
    return await this.setRepo.weapons(id).find(filter);
  }

  // @patch('/sets/{id}/weapons', {
  //   responses: {
  //     '200': {
  //       description: 'Set.Weapon PATCH success count',
  //       content: { 'application/json': { schema: CountSchema } },
  //     },
  //   },
  // })
  // async patch(
  //   @param.path.number('id') id: number,
  //   @requestBody() weapon: Partial<Weapon>,
  //   @param.query.object('where', getWhereSchemaFor(Weapon)) where?: Where,
  // ): Promise<Count> {
  //   return await this.setRepo.weapons(id).patch(weapon, where);
  // }

  // @del('/sets/{id}/weapons', {
  //   responses: {
  //     '200': {
  //       description: 'Set.Weapon DELETE success count',
  //       content: { 'application/json': { schema: CountSchema } },
  //     },
  //   },
  // })
  // async delete(
  //   @param.path.number('id') id: number,
  //   @param.query.object('where', getWhereSchemaFor(Weapon)) where?: Where,
  // ): Promise<Count> {
  //   return await this.setRepo.weapons(id).delete(where);
  // }
}
