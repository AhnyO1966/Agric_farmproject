import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { log } from 'console';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PROJECT_PORT;
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port, ()=> console.log(`PROJECT running on port: ${port} `));
  // to vary the port number and confirm
}
bootstrap();
