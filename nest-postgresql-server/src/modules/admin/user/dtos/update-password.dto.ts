import { IsAlphanumeric, IsNotEmpty, Length } from 'class-validator';

export class UpdatePasswordDto {
  @IsNotEmpty()
  @IsAlphanumeric()
  currentPassword: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  @Length(8, 20)
  newPassword: string;
}
