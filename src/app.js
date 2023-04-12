import express from 'express'
import cors from 'cors';
import routes from './routes'

//routes
import userRoutes from '../src/routers/UserRoutes'

import "./database/indexDt"
class App{
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.server.use(express.json())
        this.server.use(cors())
    }
    
    routes(){
        this.server.use(userRoutes)
     //this.server.use(routes);
    }
}

export default new App().server;