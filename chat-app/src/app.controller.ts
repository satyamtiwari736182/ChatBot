import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { MessageDto } from "./message.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  chatReply(@Body() chatMessage: MessageDto): Promise<string> {
    return this.appService.getReply(chatMessage.message);
  }
}
