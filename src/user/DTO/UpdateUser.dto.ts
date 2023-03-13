import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { isUniqueEmail } from '../validations/emailValidation';

export class UpdateUserDTO {
  @IsNotEmpty({ message: 'nome é requerido' })
  @IsOptional()
  nome: string;

  @IsOptional()
  @IsEmail(undefined, { message: 'o email é invalido' })
  @isUniqueEmail({ message: 'email has already been registered' })
  email: string;

  @IsOptional()
  @MinLength(6, { message: 'senha precisa ter pelo menos 6 caracteres' })
  senha: string;
}
