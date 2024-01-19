import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFileDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  fieldname: string; // Photo, Signature, etc

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  originalname: string; // Photo, Signature, etc

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  encoding: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  mimetype: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  destination: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  filename: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  path: string;

  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  size: number;
}
