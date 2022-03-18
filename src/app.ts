import express, { NextFunction, Request, Response } from "express";
import deckRoutes from "./routes/decks";

const app = express();
const port = 3011;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Root path works");
  console.log(req.body);
  res.send("Hello World!");
});

app.use("/decks", deckRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  //todo: error handling
  res.status(500).json({ message: err.message });
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
