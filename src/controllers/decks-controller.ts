import { Request, Response } from "express";
// import { Deck } from "../entities/interfaces/deck";
import { DecksRepository } from "../repositories/decks-repository";
// import * as newDeck from "../../tests/mock-data/deck.json";

// const DECK: Deck = {
//   deckId: "uuid",
//   shuffled: false,
//   type: "FULL",
//   remaining: 52,
//   cards: [
//     {
//       value: "ACE",
//       suit: "SPADES",
//       code: "AS",
//     },
//   ],
// };

export class DecksController {
  private decksRepository: DecksRepository; // = new DecksRepository();

  constructor(decksRepository: DecksRepository) {
    this.decksRepository = decksRepository;
  }

  public createDeck = async (
    req: Request,
    res: Response
  ): Promise<void | any> => {
    console.log("DecksController.create");
    console.log(req.body);
    const created = await this.decksRepository.create(req.body);

    res.status(201).send(created);
  };

  public wtf() {
    console.log("WTF?");
  }
}

// export const createDeck: RequestHandler = (req, res, next) => {
//   DECKS.push("newDeck");
//   res.status(201).json(DECKS);
// };
