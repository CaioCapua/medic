import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    const existUser = this.users.find((user) => user.id === id);

    if (!existUser) {
      throw new NotFoundException('Usuario nao encontrado');
    }

    return existUser;
  }

  create(user) {
    this.users.push(user);
  }

  remove(id: string) {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex < 0) {
      throw new NotFoundException('Usuario nao encontrado');
    }

    this.users.splice(userIndex, 1);
  }
}
