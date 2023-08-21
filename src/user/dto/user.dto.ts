import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsEmail()
  login: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
