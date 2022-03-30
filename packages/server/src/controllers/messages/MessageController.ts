import { IMessageService } from "../../services/messages/IMessageService";

class MessageController {
  private messageService: IMessageService;

  constructor(messageService: IMessageService) {
    this.messageService = messageService;
  }

  async getMessageById(id: string) {
    const message = this.messageService.getMessageById(id);
    return message;
  }

  async getAllMessage() {
    const messages = this.messageService.getAllMessage();
    console.log("caiu");
    return messages;
  }

  async getAllMessageByUserId(userId: string) {
    const messageUserId = this.messageService.getAllMessageByUserId(userId);
    return messageUserId;
  }
}

export { MessageController };
