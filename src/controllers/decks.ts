import { RequestHandler } from "express";

const DECKS: string[] = [];

export const createDeck: RequestHandler = (req, res, next) => {
  DECKS.push("newDeck");
  res.status(201).json(DECKS);
};
