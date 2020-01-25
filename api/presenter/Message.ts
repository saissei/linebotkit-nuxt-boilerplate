import config from 'config';
import {
  Client,
  ClientConfig,
  TemplateMessage,
  TextMessage
} from '@line/bot-sdk';
import { VOToken } from '../valueobject/message/VOToken';
import { VOReplyMessage } from '../valueobject/message/VOReplyMessage';

export class Message {
  private line: Client;
  private static _instance: Message | null = null;
  public static get instance(): Message {
    if (this._instance === null) {
      const _config: ClientConfig = config.get<ClientConfig>('line');
      const client: Client = new Client(_config);
      this._instance = new Message(client);
      return this._instance;
    }
    return this._instance;
  }
  private constructor(client: Client) {
    this.line = client;
  }
  public sendText(replyToken: VOToken, voMessage: VOReplyMessage): void {
    const token: string = replyToken.toString();
    const message: TemplateMessage | TextMessage = voMessage.toJson();
    this.line.replyMessage(token, message);
  }
}
