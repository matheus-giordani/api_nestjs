import { IsString, IsUrl } from 'class-validator';

export class ImagemProdutoDTO {
  @IsUrl()
  url: string;
  @IsString()
  descricao: string;
}
