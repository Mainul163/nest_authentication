import { IsString } from 'class-validator';

export class roleDto {
  @IsString()
  name: string;
  @IsString()
  role: string;
  @IsString()
  label: string;
  @IsString()
  createdTime: string;
  @IsString()
  updatedTime: string;
}
