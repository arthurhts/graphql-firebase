import { messageController } from "../../../controllers/messages/index";

export default {
  Query: {
    messages: () => messageController.getAllMessage(),
    message: (_: unknown, { id }: { id: string }) =>
      messageController.getMessageById(id),
    messageUserId: (userId: string) =>
      messageController.getAllMessageByUserId(userId),
  },
};
