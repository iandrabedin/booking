import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  return res.send("Hello world");
});

app.listen(process.env.PORT || PORT);
