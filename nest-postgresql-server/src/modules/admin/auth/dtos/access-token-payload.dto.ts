import { IsUUID } from 'class-validator';

export class AccessTokenPayload {
  @IsUUID('4')
  sub: string;
}
