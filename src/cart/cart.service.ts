import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { CartDTO } from './cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from './cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartServiceRepository: Repository<CartEntity>,
  ) {}

  async createCart(cart: CartDTO): Promise<CartEntity> {
    const createCart = this.cartServiceRepository.create(cart);
    return await this.cartServiceRepository.save(createCart);
  }

  async deleteCart(@Param('cid') cid: number) {
    const findCartId = await this.cartServiceRepository.findOne({ where: { cid } });

    if (!findCartId) throw new NotFoundException('Carrito no encontrado');

    const deleteCart = await this.cartServiceRepository.delete(cid);
    return { message: 'Carrito eliminado', cart: deleteCart };
  }
}
