import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // =========================
  // USER API DOCS
  // =========================

  const userConfig = new DocumentBuilder()
    .setTitle('User API')
    .setDescription('All user-related APIs')
    .setVersion('1.0')
    .build();

  const userDocument = SwaggerModule.createDocument(app, userConfig, {
    include: [], // optionally include UserModule here
  });
  SwaggerModule.setup('api/user', app, userDocument);



  // =========================
  // ADMIN API DOCS
  // =========================
  const adminConfig = new DocumentBuilder()
    .setTitle('Admin API')
    .setDescription('All admin-related APIs')
    .setVersion('1.0')
    .build();

  const adminDocument = SwaggerModule.createDocument(app, adminConfig, {
    include: [], // optionally include AdminModule here
  });

  SwaggerModule.setup('api/admin', app, adminDocument);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
