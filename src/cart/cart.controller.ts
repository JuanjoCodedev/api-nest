import { Controller, Post, Body, NotFoundException, Delete, Param } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartDTO } from './cart.dto';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Post('/agregar-carrito')
  async createCart(@Body() cart: CartDTO) {
    try {
      const newCart = await this.cartService.createCart(cart);
      return { message: 'Carrito de compras creado', user: newCart };
    } catch (error) {
      throw new NotFoundException('Carrito de compras no encontrado');
    }
  }

  @Delete('/eliminar-cuenta/:uid') //ruta: http://localhost:3000/user/eliminar-usuario/:uid
  async deleteUser(@Param('uid') cid: number) {
    try {
      await this.cartService.deleteCart(cid);
      return { message: 'Carrito de compras eliminado' };
    } catch (error) {
      return { error: 'Carrito de compras no existe o no fue eliminado' };
    }
  }
}
