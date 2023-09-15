import { HttpException, Injectable, Param, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../database/entity.user';
import { userDTO, userUpdateDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(user: userDTO) {
    const { useremail } = user;
    const findUser = await this.userRepository.findOne({ where: { useremail } });

    if (findUser) throw new HttpException('El correo electrónico ya está registrado', 401);

    const createUser = this.userRepository.create(user);
    return this.userRepository.save(createUser);
  }

  async profile(useremail: string) {
    const userRecord = await this.userRepository.findOne({ where: { useremail } });
    if (!userRecord) throw new UnauthorizedException('Usuario no encontrado');

    return userRecord;
  }

  async updateUser(@Param('uid') uid: number, updatedPersonDTO: Partial<userUpdateDTO>) {
    const findUser = await this.userRepository.findOne({ where: { uid } });

    if (!findUser) throw new HttpException('Usuario no encontrado o no existe', 404);

    this.userRepository.merge(findUser, updatedPersonDTO);
    return this.userRepository.save(findUser);
  }

  async deleteUser(@Param('uid') uid: number) {
    const findUserId = await this.userRepository.findOne({ where: { uid } });

    if (!findUserId) throw new HttpException('Usuario no encontrado', 404);

    const deleteUser = await this.userRepository.delete(uid);
    return { message: 'Usuario eliminado', user: deleteUser.raw };
  }
}
