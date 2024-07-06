"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedCodeChallenges = void 0;
const data_source_1 = require("../database/data-source");
const code_challenge_entity_1 = require("../entities/code-challenge.entity");
const seedCodeChallenges = () => __awaiter(void 0, void 0, void 0, function* () {
    const codeChallengeRepository = data_source_1.AppDataSource.getRepository(code_challenge_entity_1.CodeChallenge);
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
        yield codeChallengeRepository.save(newChallenge);
    }
    console.log("Code challenges seeded successfully!");
});
exports.seedCodeChallenges = seedCodeChallenges;
