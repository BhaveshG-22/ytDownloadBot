const express = require("express");
const download = require("./download");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Working well !");
});

app.get("/download", (req, res) => {
  let link = req.body.link;
  if (link) {
    try {
      download(link);
      res.status(200).send("Working well !");
    } catch (error) {
      res.status(400).send(`Internal Server Error: ${error}`);
    }
  } else {
    res.status(400).send("Bad Request: Link not provided");
  }
});

app.listen(3000, (req, res) => {
  console.log("In Index route, working well !");
});
