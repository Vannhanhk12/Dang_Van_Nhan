import { Router } from "express";
import * as codeChallengeController from "../controllers/code-challenge.controller";

const router = Router();

router.post("/code-challenges", codeChallengeController.createCodeChallenge);
router.get("/code-challenges", codeChallengeController.getCodeChallenges);
router.get("/code-challenges/:id", codeChallengeController.getCodeChallenge);
router.put("/code-challenges/:id", codeChallengeController.updateCodeChallenge);
router.delete("/code-challenges/:id", codeChallengeController.deleteCodeChallenge);

export default router;
