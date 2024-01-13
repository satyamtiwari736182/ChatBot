import { Injectable } from "@nestjs/common";
import { MessageRepository } from "./message.repository";

@Injectable()
export class AppService {
  constructor(private readonly messageRepository: MessageRepository) {}

  getHello(): string {
    return "Hello World!";
  }
  async getReply(msg: string): Promise<string> {
    const delayedOperation = () =>
      new Promise<string>((resolve) => {
        setTimeout(() => {
          const message: string = this.messageRepository.getMessage(msg);
          resolve(message);
        }, 5000);
      });

    // Use async/await to wait for the delayed operation to complete
    const message: string = await delayedOperation();
    return message;
  }
}
