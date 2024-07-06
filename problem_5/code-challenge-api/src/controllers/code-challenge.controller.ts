import { Request, Response } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import * as codeChallengeService from "../services/code-challenge.service";
import { CreateCodeChallengeDto } from "../dtos/code-challenge.dto";

export const createCodeChallenge = async (req: Request, res: Response): Promise<void> => {
  try {
    const createCodeChallengeDto = plainToInstance(CreateCodeChallengeDto, req.body);
    const errors = await validate(createCodeChallengeDto);
    if (errors.length > 0) {
      res.status(400).json(errors);
      return;
    }

    const savedChallenge = await codeChallengeService.createCodeChallenge(createCodeChallengeDto);
    res.status(201).json(savedChallenge);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export const getCodeChallenges = async (req: Request, res: Response): Promise<void> => {
  try {
    const { page, limit, difficulty, search } = req.query;
    const pageNumber = page ? parseInt(page as string, 10) : 1;
    const limitNumber = limit ? parseInt(limit as string, 10) : 10;

    const result = await codeChallengeService.getCodeChallenges(
      pageNumber,
      limitNumber,
      difficulty as string,
      search as string
    );
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export const getCodeChallenge = async (req: Request, res: Response): Promise<void> => {
  try {
    const challenge = await codeChallengeService.getCodeChallenge(parseInt(req.params.id));
    if (!challenge) {
      res.status(404).json({ message: "Code Challenge not found" });
      return;
    }
    res.status(200).json(challenge);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export const updateCodeChallenge = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedChallenge = await codeChallengeService.updateCodeChallenge(
      parseInt(req.params.id),
      req.body
    );
    if (!updatedChallenge) {
      res.status(404).json({ message: "Code Challenge not found" });
      return;
    }
    res.status(200).json(updatedChallenge);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export const deleteCodeChallenge = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await codeChallengeService.deleteCodeChallenge(parseInt(req.params.id));
    if (result.affected === 0) {
      res.status(404).json({ message: "Code Challenge not found" });
      return;
    }
    res.status(200).json({ message: "Code Challenge deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};
