typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PassportModule } from '@nestjs/passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Настройка паспорта
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
}
bootstrap();
