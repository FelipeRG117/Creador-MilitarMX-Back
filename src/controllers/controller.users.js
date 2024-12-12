import { UsersRepository } from "../repositories/repository.users.js";
const usersRepository = new UsersRepository();
export class ControllerUsers {
  async getUsers(req, res) {
    try {
      const allUsers = await usersRepository.getAllUsers();
      console.log(allUsers, "podria ser");
      return res.json(allUsers);
    } catch (error) {
      console.log(error);
    }
  }
}
