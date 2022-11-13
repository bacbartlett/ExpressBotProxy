import { Request, Response } from "express";

const express = require('express');
const examplerouter = express.Router();

examplerouter.get('/', (req: Request, res: Response) => {
    res.send('An example router');
  });

export default examplerouter;