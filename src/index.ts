import express, { Express, Request, Response } from 'express';
import path from 'path';
import examplerouter from './routes/examplerouter';
const app: Express = express();
const port = process.env.PORT || 3000;

const pathToPublic = path.join(__dirname, "..", "public");

app.use(express.static(pathToPublic))

app.use('/router', examplerouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});