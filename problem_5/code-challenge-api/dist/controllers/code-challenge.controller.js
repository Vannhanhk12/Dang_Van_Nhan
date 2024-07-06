"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const codeChallengeService = __importStar(require("../services/code-challenge.service"));
const code_challenge_dto_1 = require("../dtos/code-challenge.dto");
const createCodeChallenge = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createCodeChallengeDto = (0, class_transformer_1.plainToInstance)(code_challenge_dto_1.CreateCodeChallengeDto, req.body);
        const errors = yield (0, class_validator_1.validate)(createCodeChallengeDto);
        if (errors.length > 0) {
            res.status(400).json(errors);
            return;
        }
        const savedChallenge = yield codeChallengeService.createCodeChallenge(createCodeChallengeDto);
        res.status(201).json(savedChallenge);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
});
exports.createCodeChallenge = createCodeChallenge;
const getCodeChallenges = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page, limit, difficulty, search } = req.query;
        const pageNumber = page ? parseInt(page, 10) : 1;
        const limitNumber = limit ? parseInt(limit, 10) : 10;
        const result = yield codeChallengeService.getCodeChallenges(pageNumber, limitNumber, difficulty, search);
        res.status(200).json(result);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
});
exports.getCodeChallenges = getCodeChallenges;
const getCodeChallenge = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const challenge = yield codeChallengeService.getCodeChallenge(parseInt(req.params.id));
        if (!challenge) {
            res.status(404).json({ message: "Code Challenge not found" });
            return;
        }
        res.status(200).json(challenge);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
});
exports.getCodeChallenge = getCodeChallenge;
const updateCodeChallenge = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedChallenge = yield codeChallengeService.updateCodeChallenge(parseInt(req.params.id), req.body);
        if (!updatedChallenge) {
            res.status(404).json({ message: "Code Challenge not found" });
            return;
        }
        res.status(200).json(updatedChallenge);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
});
exports.updateCodeChallenge = updateCodeChallenge;
const deleteCodeChallenge = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield codeChallengeService.deleteCodeChallenge(parseInt(req.params.id));
        if (result.affected === 0) {
            res.status(404).json({ message: "Code Challenge not found" });
            return;
        }
        res.status(200).json({ message: "Code Challenge deleted successfully" });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
});
exports.deleteCodeChallenge = deleteCodeChallenge;
