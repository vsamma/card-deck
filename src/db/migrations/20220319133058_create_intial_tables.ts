import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("decks", (table) => {
      table.uuid("deck_id").primary(); //.defaultTo(knex.raw("(UUID())"));
      table.string("type").notNullable();
      table.boolean("shuffled").notNullable();
      table.integer("remaining").notNullable();
    })
    .createTable("cards", (table) => {
      table.increments("id").primary();
      table.string("value").notNullable();
      table.string("suit").notNullable();
      table.string("code").notNullable();
      table.boolean("short").notNullable();
    })
    .createTable("deck_cards", (table) => {
      table.increments("id").primary();
      table
        .uuid("deck_id")
        .notNullable()
        .references("deck_id")
        .inTable("decks");
      table
        .integer("card_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("cards");
      table.integer("order").notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTableIfExists("deck_cards")
    .dropTableIfExists("cards")
    .dropTableIfExists("decks");
}
