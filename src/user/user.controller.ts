import { Controller, Body, Post, Get } from '@nestjs/common';
import { userDto } from './dtos/user.dto';
import * as bcrypt from 'bcrypt';
import { UserService } from './user.service';

@Controller('user')
export class userController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  async register(@Body() body: userDto) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(body.password, saltOrRounds);
    return this.userService.create({
      firstName: body.firstName,
      lastName: body.lastName,
      username: body.username,
      email: body.email,
      password: hash,
      user_type: body.user_type,
      role: body.role,
    });
  }
  @Get()
  async getAllUser() {
    return this.userService.getAllUser();
  }
}
