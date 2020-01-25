import { Request, Response } from 'express';
import { VOHeaders } from '../valueobject/message/VOReqHeader';
import { VOSignature } from '../valueobject/authenticate/VOSignature';
import { VOBody } from '../valueobject/message/VOReqBody';
import { SenarioHandler } from '../interactor/SenarioHandler';

export class MessageController {
  public static handler(req: Request, res: Response) {
    const header: VOHeaders = VOHeaders.of(req.headers);
    const body: VOBody = VOBody.of(req.body);
    const signature: VOSignature = VOSignature.check(body, header);
    const signatureResult: boolean = signature.toResult();
    if (!signatureResult) {
      res.sendStatus(401);
      return;
    }
    res.sendStatus(200);
    SenarioHandler.switch(body);
  }
}
