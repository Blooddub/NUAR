/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    // connect to db
    try {
        
    } catch (error) {
        console.log(error);
    }
  const app = await NestFactory.create(AppModule);
    await app.listen(3000, () => {
        console.log("Server started")
    });
}
bootstrap();
