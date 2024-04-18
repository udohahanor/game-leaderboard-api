const express = require("express");
const {
  getPlayers,
  postPlayer,
  getPlayer,
  updatePlayer,
  deletePlayer,
} = require("../controllers/playerController");

const router = express.Router();

// ROUTES

// GET all players on a Leaderboard
router.get("/", getPlayers);

// POST a new player on the leaderboard
router.post("/", postPlayer);

// GET a single player on a Leaderboard
router.get("/:id", getPlayer);

// UPDATE a single player on a Leaderboard
router.put("/:id", updatePlayer);

// DELETE a single player on a Leaderboard
router.delete("/:id", deletePlayer);

module.exports = router;
