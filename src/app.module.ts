import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { LoggerModule } from './logger/logger.module';
import { AaaModule } from './aaa/aaa.module';
import {Logger2Module} from "./logger/logger2.module";

@Module({
  imports: [PersonModule, LoggerModule, AaaModule,
  Logger2Module.register({
    xxx:1 ,
    yyy: 2
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
