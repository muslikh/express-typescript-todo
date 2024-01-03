import { Router } from "express";
import IRouter from "./RouteInterfaces";

abstract class BaseRoutes implements IRouter{

    public router: Router;

    constructor(){
        this.router = Router();
        this.routers();
    }
    abstract routers(): void;
}

export default BaseRoutes;
