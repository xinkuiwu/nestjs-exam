import {ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform} from '@nestjs/common';

@Injectable()
export class FileSizeValidPipePipe implements PipeTransform {
  transform(value: Express.Multer.File, metadata: ArgumentMetadata) {
    if(value.size > 10 * 1024) {
      throw new HttpException('file is greater than 10k',
        HttpStatus.BAD_REQUEST)
    }
    return value
  }
}
