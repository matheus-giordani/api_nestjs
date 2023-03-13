import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  save(user: UserEntity) {
    this.users.push(user);
    console.log(user);
  }

  async listar(): Promise<UserEntity[]> {
    return this.users;
  }

  async searchUser(email: string): Promise<boolean> {
    const hasEmail = this.users.find((user) => user.email == email);
    return hasEmail !== undefined;
  }

  update(id: string, data: Partial<UserEntity>) {
    const wantedUser = this.searchForId(id);
    Object.entries(data).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }
      wantedUser[key] = value;
    });

    return wantedUser;
  }

  private searchForId(id: string) {
    const wantedUser = this.users.find((user) => user.id === id);
    if (!wantedUser) {
      throw new Error('user not exist');
    }
    return wantedUser;
  }

  async delete(id: string) {
    const wantedUser = this.searchForId(id);

    this.users = this.users.filter((user) => {
      user.id !== id;
    });
    return wantedUser;
  }
}
