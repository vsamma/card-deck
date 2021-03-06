import { Deck } from "../../src/entities/interfaces/deck";

export const deck: Deck = {
  deckId: "uuid",
  shuffled: false,
  type: "FULL",
  remaining: 52,
  cards: [
    {
      value: "ACE",
      suit: "SPADES",
      code: "AS",
    },
    {
      value: "KING",
      suit: "HEARTS",
      code: "KH",
    },
    {
      value: "8",
      suit: "CLUBS",
      code: "8C",
    },
  ],
};
