import { Model, snakeCaseMappers } from "objection";
import { Deck } from "../interfaces/deck";
import { CardModel } from "./card-model";

export class DeckModel extends Model implements Deck {
  public deckId!: string;
  public type!: string;
  public shuffled!: boolean;
  public remaining!: number;
  public cards!: CardModel[];

  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  // Table name is the only required property.
  public static tableName = "cards";

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static get jsonSchema() {
    return {
      type: "object",
      required: ["type", "remaining", "shuffled"],

      properties: {
        deckId: { type: "integer" },
        type: { type: "string", minLength: 1, maxLength: 255 },
        remaining: { type: "integer" },
        shuffled: { type: "boolean" },
      },
    };
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      roles: {
        relation: Model.ManyToManyRelation,
        modelClass: CardModel,
        join: {
          from: "deck.deck_id",
          through: {
            // user_roles is the join table.
            from: "deck_cards.deck_id",
            to: "deck_cards.card_id",

            extra: ["order"],
          },
          to: "cards.id",
        },
      },
    };
  }
}
