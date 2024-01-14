import { IsBoolean, IsString } from 'class-validator';

export class userDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  username: string;
  @IsString()
  email: string;
  @IsString()
  password: string;
  @IsString()
  user_type: string;
  @IsString()
  role: [];
  @IsBoolean()
  isActive: boolean;
}
