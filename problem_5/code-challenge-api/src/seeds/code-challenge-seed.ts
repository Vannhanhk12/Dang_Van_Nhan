import { AppDataSource } from "../database/data-source";
import { CodeChallenge } from "../entities/code-challenge.entity";

export const seedCodeChallenges = async () => {
  const codeChallengeRepository = AppDataSource.getRepository(CodeChallenge);

  const challenges = [
    {
      title: "Challenge 1",
      description: "Description for challenge 1",
      difficulty: "Easy",
      point: 100,
    },
    {
      title: "Challenge 2",
      description: "Description for challenge 2",
      difficulty: "Medium",
      point: 200,
    },
    {
      title: "Challenge 3",
      description: "Description for challenge 3",
      difficulty: "Hard",
      point: 300,
    },
    {
      title: "Challenge 4",
      description: "Description for challenge 4",
      difficulty: "Easy",
      point: 150,
    },
    {
      title: "Challenge 5",
      description: "Description for challenge 5",
      difficulty: "Medium",
      point: 250,
    },
    {
      title: "Challenge 6",
      description: "Description for challenge 6",
      difficulty: "Hard",
      point: 350,
    },
    {
      title: "Challenge 7",
      description: "Description for challenge 7",
      difficulty: "Easy",
      point: 110,
    },
    {
      title: "Challenge 8",
      description: "Description for challenge 8",
      difficulty: "Medium",
      point: 220,
    },
    {
      title: "Challenge 9",
      description: "Description for challenge 9",
      difficulty: "Hard",
      point: 330,
    },
    {
      title: "Challenge 10",
      description: "Description for challenge 10",
      difficulty: "Easy",
      point: 120,
    },
  ];

  for (const challenge of challenges) {
    const newChallenge = codeChallengeRepository.create(challenge);
    await codeChallengeRepository.save(newChallenge);
  }

  console.log("Code challenges seeded successfully!");
};
