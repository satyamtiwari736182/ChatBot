import { Injectable } from '@nestjs/common';
import { MessageRepository } from './message.repository';

@Injectable()
export class AppService {
  constructor(private readonly messageRepository: MessageRepository){}
  
  getHello(): string {
    return 'Hello World!';
  }
  getReply(msg:string): string {
    return this.messageRepository.getMessage(msg);;
  }
}
