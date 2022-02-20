import { Router } from "express";
import { createDeck } from "../controllers/decks";

const router = Router();

router.post("/", createDeck);

router.get("/:id");

router.get("/:id/draw");

export default router;
