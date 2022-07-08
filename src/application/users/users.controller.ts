import { Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param() id: string) {
    return this.usersService.findOne(id);
  }
}
