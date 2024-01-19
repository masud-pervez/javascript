import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class LoginCredentialDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  password: string;
}
