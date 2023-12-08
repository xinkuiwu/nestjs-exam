import {
  Body,
  Controller, FileTypeValidator,
  Get, HttpException,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors
} from '@nestjs/common';
import {AppService} from './app.service';
import {AnyFilesInterceptor, FileFieldsInterceptor, FileInterceptor, FilesInterceptor} from "@nestjs/platform-express";
import * as multer from "multer";
import * as fs from 'fs';
import * as path from "path";
import {FileSizeValidPipePipe} from "./file-size-valid-pipe.pipe";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    try {
      fs.mkdirSync(path.join(process.cwd(), 'my-uploads'));
    } catch (e) {
    }

    cb(null, path.join(process.cwd(), 'my-uploads'))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + '-' + file.originalname
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
});

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('aaa')
  @UseInterceptors(FileInterceptor('aaa', {
    dest: 'uploads'
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
    console.log('body', body)
    console.log('file', file)
  }

  @Post('bbb')
  @UseInterceptors(FilesInterceptor('bbb',
    3, {
      dest: 'uploads'
    }))
  uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>,
              @Body() body) {
    console.log('body', body)
    console.log('files', files)
  }

  @Post('ccc')
  @UseInterceptors(FileFieldsInterceptor([
    {name: 'aaa', maxCount: 2},
    {name: 'bbb', maxCount: 2}
  ], {
    dest: 'uploads'
  }))
  uploadFileFields(
    @UploadedFiles() files: {
      aaa?: Express.Multer.File[],
      bbb?: Express.Multer.File[]
    },
    @Body() body
  ) {
    console.log('body', body)
    console.log('files', files)
  }

  @Post('ddd')
  @UseInterceptors(AnyFilesInterceptor(
    {storage: storage}
  ))
  uploadAnyFiles(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body
  ) {
    console.log('body', body)
    console.log('files', files)
  }

  @Post('eee')
  @UseInterceptors(FileInterceptor(
    'aaa', {
      dest: 'uploads'
    }
  ))
  uploadAnyFiles2(
    @UploadedFiles(FileSizeValidPipePipe) file: Express.Multer.File,
    @Body() body
  ) {
    console.log('body', body)
    console.log('files', file)
  }

  @Post('fff')
  @UseInterceptors(FileInterceptor('aaa', {
    dest: 'uploads'
  }))
  uploadFile3(@UploadedFile(new ParseFilePipe({
    exceptionFactory: err => {
      throw new HttpException('test' + err, 405)
    },
    validators: [
      new MaxFileSizeValidator({maxSize: 10000}),
      new FileTypeValidator({fileType: 'image/jpeg'}),
    ],
  })) file: Express.Multer.File, @Body() body) {
    console.log('body', body);
    console.log('file', file);
  }
}
