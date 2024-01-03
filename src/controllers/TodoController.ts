import { Request, Response} from "express";
import IController from "./ControllerInterfaces";
// const db = require('../db/models');

import TodoService from "../services/TodoService";


class TodoController implements IController{
    index= async (req: Request, res: Response): Promise<Response> => {
        const services: TodoService = new TodoService(req);
        const todos = await services.getAll();
        
        return res.send({
            data: todos,
            message: ""
         })
    }
    create = async (req: Request, res: Response): Promise<Response> => {
        const services: TodoService = new TodoService(req);
        const todos = await services.store();
        
         return res.send({
            data: todos,
            message: "TOdo Createed"
         })
    }
    show = async (req: Request, res: Response): Promise<Response> => {
        const services: TodoService = new TodoService(req);
        const todos = await services.getOne();

        return res.send({
            data: todos,
            message: ""
         })
    }
    update = async (req: Request, res: Response): Promise<Response> => {
        const services: TodoService = new TodoService(req);
        const todos = await services.update();

        return res.send({
            data: todos,
            message: "Todo Updated"
         })

    }
    delete = async (req: Request, res: Response): Promise<Response> => {
        
        const services: TodoService = new TodoService(req);
        const todos = await services.delete();

        return res.send({
            data: todos,
            message: "Todo Deleted"
         })
    }
    
}

export default new TodoController();
