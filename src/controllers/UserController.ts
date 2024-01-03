import { Request, Response} from "express";
import IController from "./ControllerInterfaces";

let data: any[] = [
    { id: 1, name: "adi"},
    { id: 2, name: "budi"},
    { id: 3, name: "cidi"},
    { id: 4, name: "didi"},
    { id: 5, name: "mimi"},
];

class UserController implements IController{
    index(req: Request, res: Response): Response {
        return res.send(data);
    }
    create(req: Request, res: Response): Response {
        const { id, name } = req.body;

        data.push({ id, name });

        return res.send("create sukses")
    }
    show(req: Request, res: Response): Response {
        const { id } = req.params;

        let person = data.find(item => item.id == id);
        return res.send(person);
    }
    update(req: Request, res: Response): Response {
        const { id } =  req.params;
        const { name } = req.body;

        let person = data.find(item => item.id == id);
        person.name = name;

        return res.send("update sukses");
    }
    delete(req: Request, res: Response): Response {
        const { id } = req.params;

        let people = data.filter(item => item.id != id);
        return res.send(people);
    }
    
}

export default new UserController();
