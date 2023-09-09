import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../database/entity';
import { PersonDTO } from './dto/person.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(Person: PersonDTO): Promise<User> {
    const createdUser = this.userRepository.create(Person); // Crear el esquema del usuario
    return await this.userRepository.save(createdUser); // Guarda el usuario previamente creado
  }

  async updateUser(@Param('uid') uid: number, UpdatedPersonDTO: Partial<PersonDTO>) {
    const userExist = await this.userRepository.findOne({ where: { uid } });

    if (!userExist) {
      return null;
    }

    this.userRepository.merge(userExist, UpdatedPersonDTO);
    return await this.userRepository.save(userExist);
  }

  async deleteUser(@Param('uid') uid: number) {
    await this.userRepository.delete(uid);
  }
}
