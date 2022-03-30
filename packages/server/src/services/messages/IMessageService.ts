import { IMessage } from "../../models/IMessage";

interface IMessageService {
  getAllMessage(): Promise<IMessage[] | null>;
  getMessageById(id: string): Promise<IMessage | null>;
  getAllMessageByUserId(userId: string): Promise<IMessage[] | null>;
}

export { IMessageService };
