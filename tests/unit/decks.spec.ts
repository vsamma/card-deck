import * as DecksController from "../decks";

describe("Decks.createDeck", () => {
  it("should have a createDeck function", () => {
    expect(typeof DecksController.createDeck).toBe("function");
  });
});
