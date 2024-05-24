import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { CatsController } from './cats/cats.controller';
@Module({
  imports:[UsersController, CatsController]
})
export class AppModule {}
