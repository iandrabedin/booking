import express from "express";

const app = express();
const PORT = process.env.APP_SERVER_PORT;

app.get("/", (req, res) => {
  return res.send("Hello world");
});

app.listen(PORT);
