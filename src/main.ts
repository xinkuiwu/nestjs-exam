import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from "@nestjs/platform-express";
import {MyLogger} from "./MyLogger";

async function bootstrap() {
  const app =
    await NestFactory.create<NestExpressApplication>(AppModule,
      {
        // logger:false
        // logger:['warn','error']
        // logger: new MyLogger()
      });
  app.useStaticAssets('public', { prefix: '/static'});

  await app.listen(3000);
}
bootstrap();
