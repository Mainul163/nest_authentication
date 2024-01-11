import { Controller, Body, Post } from '@nestjs/common';

import { roleDto } from './dtos/role.dto';

import { RoleService } from './role.service';
@Controller('role')
export class roleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  async register(@Body() body: roleDto) {
    return this.roleService.createRole({
      name: body.name,
      role: body.role,
      label: body.label,
      createdTime: new Date().toLocaleString(),
      updatedTime: new Date().toLocaleString(),
    });
  }
}
