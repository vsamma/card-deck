import { DecksController } from "../../src/controllers/decks-controller";
import * as httpMocks from "node-mocks-http";
// import { NextFunction, Request, Response } from "express";
import { Request, Response } from "express";
// import { Request } from "express";
// import * as newDeck from "../mock-data/deck.json";
import { deck as newDeck } from "../mock-data/deck";
import { DecksRepository } from "../../src/repositories/decks-repository";

let req: Request, res: Response; //, next: NextFunction;
let decksRepository: DecksRepository;
let decksController: DecksController;
// DecksController.createDeck = jest.fn();

beforeAll(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  // next = () => {};
  decksRepository = new DecksRepository();
  decksController = new DecksController(decksRepository);
  // decksController.createDeck = jest.fn();
  // decksRepository.create = jest.fn();
  // decksRepository.create = jest.spyOn();
});

describe("Decks.createDeck", () => {
  // let spy: jest.Mock;

  beforeAll(() => {
    // spy = jest.fn();
    // spy = jest.spyOn(decksRepository, "create");
  });

  beforeEach(() => {
    req.body = newDeck;
  });

  // afterEach(() => spy.mockRestore()); // main difference is here

  it("should have a createDeck function", () => {
    expect(typeof decksController.createDeck).toBe("function");
  });

  it("should call DecksRepository.create", async () => {
    const spy = jest.spyOn(decksController, "createDeck");
    const spy2 = jest.spyOn(decksRepository, "create");
    // const spy3 = jest.spyOn(decksController, "wtf");
    await decksController.createDeck(req, res);

    //TODO - this does not work for some reason??
    expect(spy2).toBeCalledWith(newDeck);
    //This works as well:
    // expect(decksRepository.create).toBeCalledWith(newDeck);
    expect(spy).toBeCalled();
    expect(spy2).toBeCalled();
  });

  it("should return 201 response code", async () => {
    await decksController.createDeck(req, res);

    expect(res.statusCode).toBe(201);
    // expect(res._isEndCalled()).toBeTruthy();
  });
});
