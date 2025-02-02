import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { Logger } from '@nestjs/common';
// import { CustomLogger } from './config/custom.logger';
import { ValidationPipe } from '@nestjs/common';
import { CustomLogger } from './config/custom.logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  const customlogger = new CustomLogger('Bootstrap');

  await app.listen(3000);
  customlogger.debug(`Application is running on: ${await app.getUrl()}`);

  //   const logger = new WinstonLogger();
  //   const appUrl = await app.getUrl();
  //   logger.info(`Application is running on: ${appUrl}`);
}
bootstrap();
