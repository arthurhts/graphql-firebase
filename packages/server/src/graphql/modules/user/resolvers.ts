import { userController } from "../../../controllers/users/index";

export default {
  Query: {
    users: () => userController.getAllUser(),
    user: (_: unknown, { id }: { id: string }) =>
      userController.getUserById(id),
  },
  // Mutation: {
  //   createUser: () => userController.createUser(user, "id"),
  //   deleteUser: () => userController.deleteUser("id"),
  //   updateUser: () => userController.updateUser(user, "id"),
  // },
};
