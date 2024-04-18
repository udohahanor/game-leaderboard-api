require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const playerRouter = require("./routes/playerRouter");

PORT = 4001 || process.env.PORT;
MONGO_URI = process.env.MONGO_URI;

//ExpressMiddleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use("/api/players", playerRouter);

//Connection to database
mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, console.log(`Server is running on port ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });
