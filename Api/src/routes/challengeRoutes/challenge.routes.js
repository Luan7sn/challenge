const express = require("express");
const Router = express.Router();
const ChallengeController = require("../../modules/challenge/index");

const challengeRouter = Router;
const challengeController = new ChallengeController();

challengeRouter.get(
  '/getRepositories',
  challengeController.getRepositories
);

module.exports = challengeRouter;
