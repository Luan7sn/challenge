const express = require("express");
const router = express.Router();
const challengeRoutes = require('./challengeRoutes/challenge.routes');

router.use('/v1/challenge', challengeRoutes);

module.exports = router;
