import { IMessage } from "../../models/IMessage";
import { IMessageRepository } from "../../repositories/messages/IMessageRepository";
import { IMessageService } from "./IMessageService";

class MessageService implements IMessageService {
  private messageRepository: IMessageRepository;
  constructor(messageRepository: IMessageRepository) {
    this.messageRepository = messageRepository;
  }

  async getAllMessage(): Promise<IMessage[] | null> {
    const messages = this.messageRepository.getAllMessage();
    return messages;
  }

  async getMessageById(id: string): Promise<IMessage | null> {
    const message = this.messageRepository.getMessageById(id);
    return message;
  }

  async getAllMessageByUserId(userId: string): Promise<IMessage[] | null> {
    const messageUserId = this.messageRepository.getAllMessageByUserId(userId);
    return messageUserId;
  }
}

export { MessageService };
