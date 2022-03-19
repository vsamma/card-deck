import { Router } from "express";
import { DecksController } from "../controllers/decks-controller";
import { DecksRepository } from "../repositories/decks-repository";

const router = Router();
const decksRepository = new DecksRepository();
const decksController = new DecksController(decksRepository);

router.post("/", decksController.createDeck);

router.get("/:id");

router.get("/:id/draw");

export default router;
