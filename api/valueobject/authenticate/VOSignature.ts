import config from 'config';
import * as line from '@line/bot-sdk';
import { VOHeaders } from '../message/VOReqHeader';
import { VOBody } from '../message/VOReqBody';

interface CONFIGMAP {
  channelSecret: string;
  channelAccessToken: string;
}

const lineConfig: CONFIGMAP = config.get('line');

export class VOSignature {
  private result: boolean;
  public static WRONG: VOSignature = new VOSignature(false);
  public static MATCHES: VOSignature = new VOSignature(true);
  public static check(events: VOBody, header: VOHeaders): VOSignature {
    const token: string = events.extractToken();
    if (token === '00000000000000000000000000000000') {
      return VOSignature.MATCHES;
    }
    const signature: string | undefined = header.extractSignature();
    if (signature === undefined) {
      return VOSignature.WRONG;
    }
    const body: string = events.toStringify();
    const result: boolean = line.validateSignature(
      body,
      lineConfig.channelSecret,
      signature
    );
    if (result) {
      return VOSignature.MATCHES;
    }
    return VOSignature.WRONG;
  }
  private constructor(result: boolean) {
    this.result = result;
  }
  public toResult(): boolean {
    return this.result;
  }
}
