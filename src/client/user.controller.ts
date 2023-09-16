import { UseGuards, Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { userDTO, userUpdateDTO } from './user.dto';
import { Request } from 'express';
import { Role } from 'src/auth/constants/role.enum';
import { User } from 'src/database/entity.user';
import { Auth } from 'src/auth/decorators/auth.decorator';

interface getUserWithRoles extends Request {
  user: {
    useremail: string;
  };
}

@Controller('user') // ruta: http://localhost:3000/user
export class UserController {
  constructor(private userService: UserService) {}

  @Auth(Role.USER)
  @Post('/crear-cuenta') //ruta: http://localhost:3000/user/registro-usuario
  async createUser(@Body() user: userDTO) {
    return await this.userService.createUser(user);
  }

  @Auth(Role.USER)
  @Get('/perfil') //ruta: http://localhost:3000/user/perfil
  async getProfile(@Req() req: getUserWithRoles) {
    const { useremail } = req.user;
    const userProfile = await this.userService.profile(useremail);
    return userProfile;
  }

  @Auth(Role.USER)
  @Patch('/modificar-cuenta/:uid') //ruta: http://localhost:3000/user/actualizar-usuario/:uid
  async updateUser(@Param('uid') uid: number, @Body() UpdatedPersonDTO: userUpdateDTO): Promise<User> {
    return await this.userService.updateUser(uid, UpdatedPersonDTO);
  }

  @Auth(Role.USER)
  @Delete('/eliminar-cuenta/:uid') //ruta: http://localhost:3000/user/eliminar-usuario/:uid
  async deleteUser(@Param('uid') uid: number) {
    return await this.userService.deleteUser(uid);
  }
}
