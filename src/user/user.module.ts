import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { EmailValidation } from './validations/emailValidation';

@Module({
  controllers: [UserController],
  providers: [UserRepository, EmailValidation],
})
export class UserModule {}
