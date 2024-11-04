import { NextFunction, Request, Response } from "express";

const verifyCar = (req: Request, res: Response, next: NextFunction) => {
  console.log("Verify");
  const { brand, year, model } = req.body;
  if (!brand || !year || !model) {
    res.json({
      message: `Please provide informations about the car`,
    });
  }
  next();
};

export default verifyCar;
