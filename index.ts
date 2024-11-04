import express, { NextFunction, Request, Response } from "express";
import carRouter from "./routes/carRouter";
import "dotenv/config";

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
//to be able to send form
app.use(express.urlencoded({ extended: true }));

const middleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("Hello this is the middleware");
  next();
};

app.get("/", middleware, (req: Request, res: Response) => {
  res.send("Welcome to my API");
});

app.use("/api", carRouter);

app.listen(PORT, () => {
  console.log("Server is running on port 3002");
});
