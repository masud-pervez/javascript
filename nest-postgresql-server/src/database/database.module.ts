import { Module } from '@nestjs/common';
import { databaseProvider } from './database.provider';

@Module({
  imports: [...databaseProvider],
})
export class DatabaseModule {}
