import { IsNotEmpty } from 'class-validator';

export class CartDTO {
  @IsNotEmpty()
  readonly uid: number;

  @IsNotEmpty()
  readonly pid: number;

  @IsNotEmpty()
  readonly quantity: number;

  @IsNotEmpty()
  readonly sub: number;
}
