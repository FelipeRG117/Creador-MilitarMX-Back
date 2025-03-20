//voy a importar el modelo de users
import { modelUsers } from "../models/model.users.js";
import UserDTO from "../dto/user.dto.js";
export class UsersRepository {
  async getAllUsers() {
    try {
      const usersData = await modelUsers.find().lean();
      console.log("esto es users", usersData);
      const User = usersData.map(
        (user) =>
          new UserDTO({
            id: user._id.toString(),
            userName: user.userName,
            firstName: user.firstName,
            preference: user.preference,
            notification: user.notification,
            location: user.location,
            followed: user.followed,
          })
      );
      console.log("esto es users", User);
      return User;
    } catch (error) {
      console.log(error);
    }
  }
}
