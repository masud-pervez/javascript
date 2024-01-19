import { IsEnum, IsOptional } from 'class-validator';
import { UserRole } from '../enums/user-role.enum';
import { UserStatus } from '../enums/user-status.enum';

export class FilterUserDto {
  @IsOptional()
  name: string;

  @IsOptional()
  email: string;

  @IsOptional()
  username: string;

  @IsEnum(UserRole)
  @IsOptional()
  roles: UserRole;

  @IsEnum(UserStatus)
  @IsOptional()
  status: UserStatus;
}
