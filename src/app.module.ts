import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './user/user.entity';
import { Role } from './role/role.entity';
import { userModule } from './user/user.module';
import { roleModule } from './role/role.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin123@123',
      database: 'nest_test',
      entities: [User, Role],
      synchronize: true,
    }),
    userModule,
    roleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
