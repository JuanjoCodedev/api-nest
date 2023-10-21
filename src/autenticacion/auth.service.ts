import { Injectable, HttpException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/database/entity.user';
import { AuthDTO } from './auth.dto';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async validateAuth({ useremail, userpassword }: AuthDTO) {
    const findUser = await this.userRepository.findOne({ where: { useremail } });

    if (!findUser) throw new UnauthorizedException('Usuario no encontrado');

    const validatePassword = await compare(userpassword, findUser.userpassword);

    if (!validatePassword) throw new HttpException('Contraseña incorrecta', 403);

    const payload = { uid: findUser.uid, email: findUser.useremail, roles: findUser.roles };

    const token = await this.jwtService.signAsync(payload);

    const user = { uid: findUser.uid, name: findUser.username, email: findUser.useremail, roles: findUser.roles, token };

    return user;
  }
}
