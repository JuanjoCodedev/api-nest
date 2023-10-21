import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/database/entity.user';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwt.constant';

@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtModule.register({ global: true, secret: jwtConstants.secret, signOptions: { expiresIn: '1h' } })],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
