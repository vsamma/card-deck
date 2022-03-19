import { Model, snakeCaseMappers } from "objection";
import { Card } from "../interfaces/card";

export class CardModel extends Model implements Card {
  public id!: number;
  public value!: string;
  public suit!: string;
  public code!: string;
  public short!: boolean;
  public order!: number;

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
      required: ["value", "suit", "code", "short"],

      properties: {
        id: { type: "integer" },
        value: { type: "string", minLength: 1, maxLength: 255 },
        suit: { type: "string", minLength: 1, maxLength: 255 },
        code: { type: "string", minLength: 1, maxLength: 255 },
        short: { type: "boolean" },
      },
    };
  }
}
