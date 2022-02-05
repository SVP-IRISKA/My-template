import cookieParser from "cookie-parser";
import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";

import { resolve } from "path";


import { Html } from "../client/html.js";

const server = express();
const PORT = process.env.PORT || 8087;

const middlewere = [
  cors(),
  cookieParser(),
  express.json({ limit: "50kb" }),
  express.static(resolve(process.cwd(), "dist")),
];

middlewere.forEach((item) => server.use(item));

server.get("/", (req, res) => {
  res.send("Express Server, Hello-hello!");
});

server.get("/*", (req, res) => {
  const initialState = {
    location: req.url,
  };
  res.send(
    Html({
      body: "",
      initialState,
    })
  );
});

server.listen(PORT, () => {
  console.log(`Serving at http://localhost:${PORT}`);
});
