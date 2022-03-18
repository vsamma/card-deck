import { Card } from "./card";

export interface Deck {
  deckId: string;
  type: string;
  shuffled: boolean;
  remaining: number;
  cards: Card[];
}
