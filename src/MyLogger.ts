import {LoggerService} from "@nestjs/common";

export class MyLogger implements LoggerService {
  log(message: string, context: string, ...optionalParams): any {
    console.log(`----log---[${context}]--`,message)
  }
  error(message: string, context: string, ...optionalParams): any {
    console.log(`----log---[${context}]--`,message)
  }
  warn(message: string, context: string, ...optionalParams): any {
    console.log(`----log---[${context}]--`,message)
  }
}