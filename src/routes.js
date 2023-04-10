import {Router} from "express"
import UsersController from "./controllers/UsersController"

const routes =  new Router();

routes.get('/hello' , UsersController.index )
routes.get('/hello1/:id',UsersController.createUser)
export default routes;