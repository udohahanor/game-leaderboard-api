const PlayerModel = require("../models/playersModel");

// ROUTES

// GET all players on a Leaderboard
const getPlayers = async (req, res) => {
  try {
    const players = await PlayerModel.find({}).sort({ highscore: -1 });
    res.status(200).json(players);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// POST a new player on the leaderboard
const postPlayer = async (req, res) => {
  const { username, email, highscore, rank } = req.body;

  try {
    const player = await PlayerModel.create({
      username,
      email,
      highscore,
      rank,
    });
    res.status(201).json(player);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET a single player on a Leaderboard
const getPlayer = async (req, res) => {
  const { id } = req.params;

  try {
    const player = await PlayerModel.findById(id);

    if (!player) {
      return res
        .status(404)
        .json({ message: `Cannot find user with id ${id}` });
    }

    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE a single player on a Leaderboard
const updatePlayer = async (req, res) => {
  const { id } = req.params;

  // Check for ID validity
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }

  const player = await PlayerModel.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!player) {
    return res.status(404).json({ message: `Cannot find user with id ${id}` });
  }
  res.status(200).json(player);
};

// DELETE a single player on a Leaderboard
const deletePlayer = async (req, res) => {
  const { id } = req.params;

  // Check for ID validity
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }
  const player = await PlayerModel.findOneAndDelete({ _id: id });

  if (!player) {
    return res.status(404).json({ message: `Cannot find user with id ${id}` });
  }
  res.status(200).json(player);
};

module.exports = {
  getPlayers,
  postPlayer,
  getPlayer,
  updatePlayer,
  deletePlayer,
};
