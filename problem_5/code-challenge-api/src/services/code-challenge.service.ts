import { AppDataSource } from "../database/data-source";
import { CodeChallenge } from "../entities/code-challenge.entity";
import { CreateCodeChallengeDto } from "../dtos/code-challenge.dto";
import { FindOptionsWhere, Like } from "typeorm";

const codeChallengeRepository = AppDataSource.getRepository(CodeChallenge);

export const createCodeChallenge = async (data: CreateCodeChallengeDto) => {
  const newChallenge = codeChallengeRepository.create(data);
  return await codeChallengeRepository.save(newChallenge);
};

export const getCodeChallenges = async (
  page: number = 1,
  limit: number = 10,
  difficulty?: string,
  search?: string
) => {
  const where: FindOptionsWhere<CodeChallenge> = {};

  if (difficulty) {
    where.difficulty = difficulty;
  }

  if (search) {
    where.title = Like(`%${search}%`);
  }

  const [challenges, total] = await codeChallengeRepository.findAndCount({
    where,
    take: limit,
    skip: (page - 1) * limit,
  });

  return { challenges, total, page, limit };
};

export const getCodeChallenge = async (id: number) => {
  return await codeChallengeRepository.findOneBy({ id });
};

export const updateCodeChallenge = async (id: number, data: Partial<CodeChallenge>) => {
  let challenge = await codeChallengeRepository.findOneBy({ id });
  if (challenge) {
    codeChallengeRepository.merge(challenge, data);
    return await codeChallengeRepository.save(challenge);
  }
  return null;
};

export const deleteCodeChallenge = async (id: number) => {
  return await codeChallengeRepository.delete(id);
};
