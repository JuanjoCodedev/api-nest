import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { userDTO } from './user.dto';
import { Request } from 'express';
import { Role } from 'src/autenticacion/constants/role.enum';
import { Auth } from 'src/autenticacion/decorators/auth.decorator';

interface getUserWithRoles extends Request {
  user: {
    uid: number;
  };
}
@Controller('user') // ruta: http://localhost:3000/user
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/crear-cuenta') //ruta: http://localhost:3000/user/registro-usuario
  async createUser(@Body() user: userDTO) {
    return await this.userService.createUser(user);
  }

  @Auth(Role.USER)
  @Get('/perfil') //ruta: http://localhost:3000/user/perfil
  async getProfile(@Req() req: getUserWithRoles) {
    const uid = req.user.uid;
    const userProfile = await this.userService.profile(uid);
    return userProfile;
  }

  @Auth(Role.USER)
  @Delete('/eliminar-cuenta/:uid') //ruta: http://localhost:3000/user/eliminar-usuario/:uid
  async deleteUser(@Param('uid') uid: number) {
    return await this.userService.deleteUser(uid);
  }
}
