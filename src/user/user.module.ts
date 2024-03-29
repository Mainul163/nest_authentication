import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { userController } from './user.controller';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [userController],
})
export class userModule {}
