import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://notice:ima1@nestdb.zl4huag.mongodb.net/learning-nest?retryWrites=true&w=majority&appName=NESTDB'),
    CatsModule,
    UsersModule]
})
export class AppModule {}
