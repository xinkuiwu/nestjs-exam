import {Inject, Injectable} from '@nestjs/common';
import {MyLogger2} from "./logger2/MyLogger2";

@Injectable()
export class AppService {
  @Inject(MyLogger2)
  private logger: MyLogger2


  getHello(): string {
    this.logger.log('yyyyy:', AppService.name)
    return 'Hello World!';
  }
}
