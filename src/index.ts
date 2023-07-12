import express, { Express, Request, Response } from 'express';
import path from 'path';
import fetch from 'node-fetch';
import examplerouter from './routes/examplerouter';
const app: Express = express();
const port = process.env.PORT || 3000;

const pathToPublic = path.join(__dirname, "..", "public");

app.use(express.static(pathToPublic))

app.use('/router', examplerouter)

app.get('/standard/:url*', async (req: Request, res: Response) => {
  const url = req.params.url + req.params[0]
  const data = await (await fetch(url)).text()
  res.send(data);
});

app.get('/bot/:url*', async (req: Request, res: Response) => {
  const url = req.params.url + req.params[0]
  const data = await (await fetch(url, {headers: {'User-Agent': `Mozilla/5.0 (compatible; Twitterbot/1.0)`}})).text()
  res.send(data);
});

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello world');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});