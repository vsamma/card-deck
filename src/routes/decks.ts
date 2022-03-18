import { Router } from "express";
import { DecksController } from "../controllers/decks-controller";

const router = Router();
const decksController = new DecksController();

router.post("/", decksController.createDeck);

router.get("/:id");

router.get("/:id/draw");

export default router;
