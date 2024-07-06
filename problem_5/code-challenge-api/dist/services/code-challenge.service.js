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
exports.deleteCodeChallenge = exports.updateCodeChallenge = exports.getCodeChallenge = exports.getCodeChallenges = exports.createCodeChallenge = void 0;
const data_source_1 = require("../database/data-source");
const code_challenge_entity_1 = require("../entities/code-challenge.entity");
const typeorm_1 = require("typeorm");
const codeChallengeRepository = data_source_1.AppDataSource.getRepository(code_challenge_entity_1.CodeChallenge);
const createCodeChallenge = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newChallenge = codeChallengeRepository.create(data);
    return yield codeChallengeRepository.save(newChallenge);
});
exports.createCodeChallenge = createCodeChallenge;
const getCodeChallenges = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (page = 1, limit = 10, difficulty, search) {
    const where = {};
    if (difficulty) {
        where.difficulty = difficulty;
    }
    if (search) {
        where.title = (0, typeorm_1.Like)(`%${search}%`);
    }
    const [challenges, total] = yield codeChallengeRepository.findAndCount({
        where,
        take: limit,
        skip: (page - 1) * limit,
    });
    return { challenges, total, page, limit };
});
exports.getCodeChallenges = getCodeChallenges;
const getCodeChallenge = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield codeChallengeRepository.findOneBy({ id });
});
exports.getCodeChallenge = getCodeChallenge;
const updateCodeChallenge = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    let challenge = yield codeChallengeRepository.findOneBy({ id });
    if (challenge) {
        codeChallengeRepository.merge(challenge, data);
        return yield codeChallengeRepository.save(challenge);
    }
    return null;
});
exports.updateCodeChallenge = updateCodeChallenge;
const deleteCodeChallenge = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield codeChallengeRepository.delete(id);
});
exports.deleteCodeChallenge = deleteCodeChallenge;
