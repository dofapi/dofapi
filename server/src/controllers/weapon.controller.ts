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
import { Weapon, Set } from '../models';
import { WeaponRepository } from '../repositories';

export class WeaponController {
  constructor(
    @repository(WeaponRepository)
    public weaponRepository: WeaponRepository,
  ) { }

  @post('/weapons', {
    responses: {
      '200': {
        description: 'Weapon model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Weapon } } },
      },
    },
  })
  async create(@requestBody() weapon: Weapon): Promise<Weapon> {
    return await this.weaponRepository.create(weapon);
  }

  @get('/weapons/count', {
    responses: {
      '200': {
        description: 'Weapon model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Weapon)) where?: Where,
  ): Promise<Count> {
    return await this.weaponRepository.count(where);
  }

  @get('/weapons', {
    responses: {
      '200': {
        description: 'Array of Weapon model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Weapon } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Weapon)) filter?: Filter,
  ): Promise<Weapon[]> {
    return await this.weaponRepository.find(filter);
  }

  // @patch('/weapons', {
  //   responses: {
  //     '200': {
  //       description: 'Weapon PATCH success count',
  //       content: { 'application/json': { schema: CountSchema } },
  //     },
  //   },
  // })
  // async updateAll(
  //   @requestBody() weapon: Weapon,
  //   @param.query.object('where', getWhereSchemaFor(Weapon)) where?: Where,
  // ): Promise<Count> {
  //   return await this.weaponRepository.updateAll(weapon, where);
  // }

  @get('/weapons/{id}', {
    responses: {
      '200': {
        description: 'Weapon model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Weapon } } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Weapon> {
    return await this.weaponRepository.findById(id);
  }

  // @patch('/weapons/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Weapon PATCH success',
  //     },
  //   },
  // })
  // async updateById(
  //   @param.path.number('id') id: number,
  //   @requestBody() weapon: Weapon,
  // ): Promise<void> {
  //   await this.weaponRepository.updateById(id, weapon);
  // }

  // @put('/weapons/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Weapon PUT success',
  //     },
  //   },
  // })
  // async replaceById(
  //   @param.path.number('id') id: number,
  //   @requestBody() weapon: Weapon,
  // ): Promise<void> {
  //   await this.weaponRepository.replaceById(id, weapon);
  // }

  // @del('/weapons/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Weapon DELETE success',
  //     },
  //   },
  // })
  // async deleteById(@param.path.number('id') id: number): Promise<void> {
  //   await this.weaponRepository.deleteById(id);
  // }

  @get('/weapons/{id}/set', {
    responses: {
      '200': {
        description: 'Set model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Set } } },
      },
    },
  })
  async findOwningList(@param.path.number('id') id: number): Promise<Set> {
    return await this.weaponRepository.set(id);
  }
}
