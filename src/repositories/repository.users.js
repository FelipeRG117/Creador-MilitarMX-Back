//voy a importar el modelo de users
import { modelUsers } from "../models/model.users.js";

export class UsersRepository {
  async getAllUsers() {
    try {
      const users = await modelUsers.find();
      console.log("esto es users", users);
      return users;
    } catch (error) {
      console.log(error);
    }
  }
}
