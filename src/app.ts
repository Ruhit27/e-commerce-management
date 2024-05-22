import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRouter } from "./Product/Product.route";
import { OrderRouter } from "./Order/Order.routes";
const app = express();

app.use(express.json())
app.use(cors())

app.use('/api',ProductRouter)
app.use('/api',OrderRouter)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
