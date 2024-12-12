import express from "express";
const router = express.Router();

import { ControllerUsers } from "../controllers/controller.users.js";
///traer creadoresMilitares / usuariosMX
const controllerUsers = new ControllerUsers();

router.get("/", controllerUsers.getUsers);

export { router as routesUsers };
