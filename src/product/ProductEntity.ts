import { ImagemProdutoDTO } from './DTO/ImagemProduct.dto';
import { CaracteristicaProdutoDTO } from './DTO/CaracteristicaProduto.dto';

export class ProductEntityDTO {
  id: string;
  nome: string;
  userId: number;
  valor: number;
  quantidadeDisponivel: number;
  descricao: string;
  caracteristicas: CaracteristicaProdutoDTO[];
  imagens: ImagemProdutoDTO[];
  categoria: string;
}
