import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './entitis/file.entity';
import { FileController } from './controllers/file.controller';
import { FilesService } from './services/file.service';

@Module({
  imports: [TypeOrmModule.forFeature([FileEntity])],
  controllers: [FileController],
  providers: [FilesService],
})
export class FileModule {}
