import { CreateUserDTO } from './DTO/CreateUser.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { ListUsersDTO } from './DTO/listUser.DTO';
import { UpdateUserDTO } from './DTO/UpdateUser.dto';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async creatUser(@Body() userData: CreateUserDTO) {
    const userEntity = new UserEntity();
    userEntity.email = userData.email;
    userEntity.nome = userData.nome;
    userEntity.senha = userData.senha;
    userEntity.id = uuid();

    this.userRepository.save(userEntity);
    return {
      user: new ListUsersDTO(userEntity.id, userEntity.nome),
      message: 'user registered',
    };
  }

  @Get()
  async getUser() {
    const usersSaved = await this.userRepository.listar();
    console.log(usersSaved);
    const listUsers = usersSaved.map((user) => {
      return new ListUsersDTO(user.id, user.nome);
    });
    return listUsers;
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() data: UpdateUserDTO) {
    const userUpdated = this.userRepository.update(id, data);

    return {
      user: userUpdated,
      message: 'user updated',
    };
  }

  @Delete('/:id')
  async removeUser(@Param('id') id: string) {
    await this.userRepository.delete(id);
    return { message: 'user removed' };
  }
}
