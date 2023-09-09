import { UseGuards, Controller, Get, Post, Body, Patch, Param, NotFoundException, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../database/entity';
import { PersonDTO } from './dto/person.dto';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';

@Controller('user') // aqui hace referenica a la ruta llamada auth, ejemplo: http://localhost:3000/user
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/obtener-usuarios') //ruta: http://localhost:3000/user/obtener-usuarios
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Post('/registro-usuario') //ruta: http://localhost:3000/user/registro-usuario
  async createUser(@Body() user: PersonDTO) {
    try {
      const newUser = await this.userService.createUser(user);
      return { message: 'Usuario creado exitosamente', user: newUser };
    } catch (error) {
      if (error.code === '23505') {
        return { message: 'El correo electronico ya esta en uso' };
      }
    }
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/actualizar-usuario/:uid') //ruta: http://localhost:3000/user/actualizar-usuario/:uid
  async updateUser(@Param('uid') uid: number, @Body() UpdatedPersonDTO: PersonDTO) {
    const userExist = await this.userService.updateUser(uid, UpdatedPersonDTO);

    if (!userExist) {
      throw new NotFoundException('Usuario no encontrado >:(');
    }

    return { message: 'Usuario actualizado' };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/eliminar-usuario/:uid') //ruta: http://localhost:3000/user/eliminar-usuario/:uid
  async deleteUser(@Param('uid') uid: number) {
    try {
      await this.userService.deleteUser(uid);
      return { message: 'usuario eliminado exitosamente' };
    } catch (error) {
      return { error: 'usuario no eliminado' };
    }
  }
}
