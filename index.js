const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const app = express();
let PORT = process.env.PORT || 3434;
app.use(cors());
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("/hitMovies", (req, res) => {
  res.json(["Kantara", "Major", "Sitaramam", "Karthikeya 2"]);
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
