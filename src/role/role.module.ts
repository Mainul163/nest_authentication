import { Module } from '@nestjs/common';
import { Role } from './role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleService } from './role.service';
import { roleController } from './role.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  providers: [RoleService],
  controllers: [roleController],
})
export class roleModule {}
