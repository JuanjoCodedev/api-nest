import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/autenticacion') //ruta: http://localhost:3000/auth/autenticacion
  async authentication(@Body() auth: AuthDTO) {
    return this.authService.validateAuth(auth);
  }
}
