import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  Logger,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesService } from '../services/file.service';
import { UserDto } from '../../user/dtos';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FilterFileDto } from '../dtos';

@UseGuards(JwtAuthGuard)
@Controller('files')
export class FileController {
  private logger = new Logger('FileController');

  constructor(private readonly filesService: FilesService) {}

  @Get('/')
  getFiles(filterFile: FilterFileDto) {
    const files = this.filesService.getFiles(filterFile);

    return {
      success: true,
      statusCode: 200,
      message: `List of File`,
      data: files,
    };
  }

  @Get('/:id')
  getFile(@Param('id', ParseUUIDPipe) id: string) {
    const file = this.filesService.getFile(id);

    return {
      success: true,
      statusCode: 200,
      message: `Get a File`,
      data: file,
    };
  }

  @Post('/')
  async createFile(@CurrentUser() user: UserDto, @Body() createFile: any) {
    this.logger.verbose(`${user.username} created file`);
    const file = await this.filesService.createFile(createFile);

    return {
      success: true,
      statusCode: 200,
      message: `New File created`,
      data: file,
    };
  }

  @Post('/create-pdf')
  async createPdf(@CurrentUser() user: UserDto, @Body() createFile: any) {
    this.logger.verbose(`${user.username} created file`);
    const file = await this.filesService.createPdf(createFile);

    return {
      success: true,
      statusCode: 200,
      message: `New File created`,
      data: file,
    };
  }

  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'public/uploads',
        filename: (req, file, cb) => {
          const fileNameSplit = file.originalname.split('.');
          console.log('fileNameSplit', fileNameSplit);

          const fileExt = fileNameSplit[fileNameSplit.length - 1];
          const justFileName = fileNameSplit[0];
          cb(null, `${Date.now()}_${justFileName}.${fileExt}`);
        },
      }),
    }),
  )
  @Post('/upload')
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    const newFile = await this.filesService.createFile(file);
    console.log('file', file);

    return {
      success: true,
      statusCode: 200,
      message: `File Upload Successfull`,
      data: newFile,
    };
  }

  @Post('/multiple-upload')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'photo', maxCount: 1 },
        { name: 'background', maxCount: 1 },
      ],
      {
        storage: diskStorage({
          destination: 'public/uploads',
          filename: (req, file, cb) => {
            const fileNameSplit = file.originalname.split('.');
            const fileExt = fileNameSplit[fileNameSplit.length - 1];
            cb(null, `${Date.now()}.${fileExt}`);
          },
        }),
      },
    ),
  )
  uploadFiles(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
        ],
      }),
    )
    files: {
      photo?: Express.Multer.File[];
      background?: Express.Multer.File[];
    },
  ) {
    console.log(files);
  }

  @Put('/')
  async updateFile(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() createFile: any,
  ) {
    const file = await this.filesService.updateFile(id, createFile);

    return {
      success: true,
      statusCode: 200,
      message: `Update a file`,
      data: file,
    };
  }
  @Delete('/:id')
  deleteFile(@Param('id', ParseUUIDPipe) id: string) {
    const file = this.filesService.deleteFile(id);

    return {
      success: true,
      statusCode: 200,
      message: `Update a file`,
      data: file,
    };
  }
}
