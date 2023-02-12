import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TelegrafModule } from 'nestjs-telegraf';
import { AppUpdate } from './app.update';

@Module({
  imports: [
    AppUpdate,
    TelegrafModule.forRoot({
      middlewares: [],
      botName: 'wyFoodStillBot',
      token: process.env.TELEGRAM_API_KEY,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
