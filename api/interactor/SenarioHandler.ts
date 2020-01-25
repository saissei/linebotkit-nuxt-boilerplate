import { VOBody } from '../valueobject/message/VOReqBody';
import { Message } from '../presenter/Message';
import { VOToken } from '../valueobject/message/VOToken';
import { VOReplyMessage } from '../valueobject/message/VOReplyMessage';

const client: Message = Message.instance;

export class SenarioHandler {
  private static message: VOBody;
  public static switch(message: VOBody): void {
    const type = message.extractionType();
    console.log(type);
    this.message = message;
    switch (type) {
      case 'text': {
        SenarioHandler.typeMessage();
        return;
      }
      default: {
        SenarioHandler.typeUndefined();
      }
    }
  }
  public static typeMessage(): void {
    const extractToken: string = this.message.extractToken();
    const token = VOToken.of(extractToken);
    const messageText = this.message.extractionMessage();
    switch (messageText) {
      case 'test': {
        const message = VOReplyMessage.testMessage();
        client.sendText(token, message);
        return;
      }
      default:
        return;
    }
  }
  public static typeUndefined(): void {}
}
