import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { isUniqueEmail } from '../validations/emailValidation';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'nome é requerido' })
  nome: string;

  @IsEmail(undefined, { message: 'o email é invalido' })
  @isUniqueEmail({ message: 'email has already been registered' })
  email: string;

  @MinLength(6, { message: 'senha precisa ter pelo menos 6 caracteres' })
  senha: string;
}
