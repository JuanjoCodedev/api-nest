import { IsNotEmpty, Length } from 'class-validator';

export class ArticlesDTO {
  @IsNotEmpty()
  @Length(2, 25)
  readonly title: string;

  @IsNotEmpty()
  @Length(2, 5)
  readonly price: string;

  @IsNotEmpty()
  @Length(2, 3)
  readonly quantity: number;

  @IsNotEmpty()
  readonly state: boolean;
}
