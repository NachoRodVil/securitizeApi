import { NestFactory, FastifyAdapter } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter(), { cors: true });
  const cors = require('cors')
  app.use(cors({ 
    origin: "https://securitize-challenge.herokuapp.com/", 
    credentials: true 
   }))
  await app.listen( process.env.PORT || 3000);
}
bootstrap();
