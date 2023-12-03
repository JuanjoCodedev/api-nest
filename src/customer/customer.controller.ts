import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { userDTO } from './customer.dto';
import { Request } from 'express';
import { Role } from 'src/autenticacion/constants/role.enum';
import { Auth } from 'src/autenticacion/decorators/auth.decorator';
import { getCustomerWithRoles } from './interface/interface.customer';

@Controller('customer') // ruta: http://localhost:3000/customer
export class CustomerController {
  constructor(private userService: CustomerService) {}

  @Post('/crear-cuenta') //ruta: http://localhost:3000/customer/crear-cuenta
  async createUser(@Body() user: userDTO) {
    return await this.userService.createUser(user);
  }

  @Auth(Role.USER)
  @Get('/perfil') //ruta: http://localhost:3000/customer/perfil
  async getProfile(@Req() req: getCustomerWithRoles) {
    const uid = req.user.uid;
    const userProfile = await this.userService.profile(uid);
    return userProfile;
  }

  @Auth(Role.USER)
  @Delete('/eliminar-cuenta/:uid') //ruta: http://localhost:3000/customer/eliminar-usuario/:uid
  async deleteUser(@Param('uid') uid: number) {
    return await this.userService.deleteUser(uid);
  }
}
