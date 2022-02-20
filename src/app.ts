import express, { NextFunction, Request, Response } from "express";
import deckRoutes from "./routes/decks";

const app = express();

app.use("/decks", deckRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  //todo: error handling
  res.status(500).json({ message: err.message });
});

app.listen(3000);
