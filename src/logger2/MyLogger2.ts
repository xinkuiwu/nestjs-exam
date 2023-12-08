import {ConsoleLogger, Inject, Injectable} from "@nestjs/common";

@Injectable()
export class MyLogger2 extends ConsoleLogger{
  @Inject('LOG_OPTIONS2')
  public options: Record<string,any>


  log(message,context) {
    console.log(this.options)

    console.log(`[${context}]`, message)
    console.log('-------')
  }

}