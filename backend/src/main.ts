import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const secretKey: string | undefined = process.env.MONGODB_URI;

if (secretKey) {
  // Use the secret key in your code
  console.log("My secret key is:", secretKey);
} else {
  // Handle the case where the environmental variable is not set
  console.error("No secret key found in environmental variables!");
}
  const port = configService.get<number>('PORT') || 3000; // Default to 3000 if PORT is not set
  await app.listen(port);
}
bootstrap();

