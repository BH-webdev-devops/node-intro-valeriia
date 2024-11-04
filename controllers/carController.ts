import { Request, Response, NextFunction } from "express";
import cars from "../data/carData";

const carController = {
  getCars: (req: Request, res: Response): any => {
    try {
      if (cars) {
        return res.json(cars);
      }
    } catch (err) {
      res.json(err);
    }
  },

  getCarById: (req: Request, res: Response): any => {
    try {
      const carID = parseInt(req.params.id);
      const carById = cars.find((car) => car.id === carID);
      if (!carById) {
        res.json({ message: "No car found" });
      }
      res.json(carById);
    } catch (err) {
      res.json(err);
    }
  },

  postCar: (req: Request, res: Response) => {
    try {
      const { brand, year, model } = req.body;
      const newCar = {
        id: cars.length + 1,
        brand,
        year,
        model,
      };
      cars.push(newCar);
      res.json(cars);
    } catch (err) {
      res.status(500).json({ message: `Internal server error 🔴` });
    }
  },

  updateCar: (req: Request, res: Response) => {
    const carID = parseInt(req.params.id);
    //   try {
    //     let carById: any = cars.find((car) => car.id === carID);
    //     const { brand, year, model } = req.body;
    //     if (!carById) {
    //       res.json({ message: "No car found" });
    //     }
    //     carById.brand = brand;
    //     carById.year = year;
    //     carById.model = model;
    //     res.json(carById);
    //   } catch (err) {
    //     res.json(err);
    //   }
    try {
      let carById: any = cars.find((car) => car.id === carID);
      const { brand, year, model } = req.body;
      const carIndex = cars.findIndex((car) => car.id === carID);
      if (carIndex === -1) {
        res.json({ message: "No car found" });
      }
      carById = {
        id: carID,
        brand: brand,
        year: year,
        model: model,
      };
      cars[carIndex] = carById;
      res.json(carById);
    } catch (err) {
      res.status(500).json({ message: `Internal server error 🔴` });
    }
  },

  deleteCar: (req: Request, res: Response) => {
    try {
      const carID = parseInt(req.params.id);
      const index = cars.findIndex((car) => car.id === carID);
      if (index === -1) {
        res.json({ message: "No car found" });
      }
      cars.splice(index, 1);
      res.json(cars);
    } catch (err) {
      res.status(500).json({ message: `Internal server error 🔴` });
    }
  },
};

export default carController;
