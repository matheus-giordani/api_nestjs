import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { CaracteristicaProdutoDTO } from './CaracteristicaProduto.dto';
import { ImagemProdutoDTO } from './ImagemProduct.dto';

export class ProductDTO {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  valor: number;

  @Min(0)
  @IsNumber()
  quantidadeDisponivel: number;
  @IsNotEmpty()
  @MaxLength(1000)
  descricao: string;

  @ValidateNested()
  @ArrayMinSize(2)
  @IsArray()
  @Type(() => CaracteristicaProdutoDTO)
  caracteristicas: CaracteristicaProdutoDTO[];

  @ValidateNested()
  @ArrayMinSize(1)
  @Type(() => ImagemProdutoDTO)
  imagens: ImagemProdutoDTO[];
  @IsNotEmpty()
  categoria: string;
}
