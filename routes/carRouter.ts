import carController from "./../controllers/carController";
import { Router } from "express";
import verifyCar from "../middleware/verifyCar";

const carRouter = Router();

carRouter.get("/cars", carController.getCars);
carRouter.get("/cars/:id", carController.getCarById);
carRouter.post("/cars", verifyCar, carController.postCar);
carRouter.put("/cars/:id", carController.updateCar);
carRouter.delete("/cars/:id", carController.deleteCar);

export default carRouter;
