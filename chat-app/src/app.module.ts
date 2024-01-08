import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageRepository } from './message.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MessageRepository],
})
export class AppModule {}
