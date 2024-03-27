import { Request, Response } from "express";

const express = require('express');
const app = express();

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
  res.send('Welcome to the server!');
});

app.get('/greet', (req: { query: { name: any; }; }, res: { send: (arg0: string) => void; }) => {
  const name = req.query.name;
  let message = 'Hello!';
  if (name) {
    message += ` Nice to meet you, ${name}!`;
  }
  res.send(message);
});

app.listen(3000, () => {
  console.log(`Server listening on port ${3000}`);
});
