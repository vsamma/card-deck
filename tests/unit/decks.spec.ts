import * as DecksController from "../../src/controllers/decks";

describe("Decks.createDeck", () => {
  it("should have a createDeck function", () => {
    expect(typeof DecksController.createDeck).toBe("function");
  });
});
