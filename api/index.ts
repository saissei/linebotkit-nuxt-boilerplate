import express, { Application, Request, Response } from 'express';
import { MessageController } from './controller/MessageController';
const app: Application = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/health', (req: Request, res: Response): void => {
  res.sendStatus(200);
});

app.post('/message', (req: Request, res: Response): void => {
  MessageController.handler(req, res);
});

module.exports = {
  path: '/webhook',
  handler: app
};
