import express, { NextFunction, Request, Response } from "express";
import deckRoutes from "./routes/decks";
import Knex from "knex";
import { Model } from "objection";
import * as knexFile from "./knexfile";
// import knexConfig from './knexfile2';

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

///////////////////////////////////////////////////////////////
// Database
///////////////////////////////////////////////////////////////

//  const knex = Knex({
//    client: 'sqlite3',
//    useNullAsDefault: true,
//    debug: false,
//    connection: {
//      filename: ':memory:'
//    }
//  });

const knex = Knex(knexFile.development);

Model.knex(knex);

console.log(knex.raw("show tables;"));
