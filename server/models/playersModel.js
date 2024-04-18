const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playersSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    highscore: {
      type: Number,
      require: true,
    },
    rank: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PlayerModel", playersSchema);
