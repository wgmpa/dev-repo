import { Router } from "express";
import UsersController from "../controllers/UsersController";

const routes = Router()

routes.get('/Users', UsersController.index);
routes.post('/Users',UsersController.createUser)

export default routes;