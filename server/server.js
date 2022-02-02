import express from "express";

const server = express();
const PORT = 8087;

server.get('/', (req, res) => {
    res.send('Express Server test ignor')
  })

server.listen(PORT, () => {
    console.log(`Serving at http://localhost:${PORT}`)
  })