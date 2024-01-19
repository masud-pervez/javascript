import { IsString } from 'class-validator';

export class FilterFileDto {
  @IsString()
  originalname: string; // Photo, Signature, etc

  @IsString()
  filename: string;
}
