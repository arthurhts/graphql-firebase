import { IMessage } from "../../models/IMessage";

interface IMessageRepository {
  getMessageById(id: string): Promise<IMessage | null>;
  getAllMessage(): Promise<IMessage[] | null>;
  getAllMessageByUserId(userId: string): Promise<IMessage[] | null>;
  // createMessage(Message: IMessage, id: string): void;
  // deleteMessage(id: string): void;
  // updateMessage(user: IUser, id: string): void;
}
export { IMessageRepository };
