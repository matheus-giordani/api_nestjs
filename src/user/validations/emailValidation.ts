import { Injectable } from '@nestjs/common';
import { UserRepository } from './../user.repository';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailValidation implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(email: any): Promise<boolean> {
    const userWithEmailExist = await this.userRepository.searchUser(email);
    return !userWithEmailExist;
  }
}

export const isUniqueEmail = (validationOptions: ValidationOptions) => {
  return (obj: object, properties: string) => {
    registerDecorator({
      target: obj.constructor,
      propertyName: properties,
      options: validationOptions,
      constraints: [],
      validator: EmailValidation,
    });
  };
};
