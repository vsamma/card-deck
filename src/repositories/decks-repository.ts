import { Deck } from "../entities/interfaces/deck";

export class DecksRepository {
  constructor() {}

  //   public async create(deck: Deck): Promise<Deck> {
  public async create(deck: Deck): Promise<Deck> {
    console.log("DecksRepository.create");

    // const projects = await ProjectModel.query().withGraphFetched(
    //   '[datasets.exportFiles, author, lastUpdater, newConfig]'
    // ); //Test this with wrong values

    return deck;
  }
}
