import { TemplateMessage, TextMessage } from '@line/bot-sdk';

export class VOReplyMessage {
  private message: TemplateMessage | TextMessage;
  public static helloMesage(): VOReplyMessage {
    const message: TextMessage = {
      type: 'text',
      text: 'Hello!'
    };
    return new VOReplyMessage(message);
  }
  public static testMessage(): VOReplyMessage {
    const message: TextMessage = {
      type: 'text',
      text: 'Hello!'
    };
    return new VOReplyMessage(message);
  }
  private constructor(message: TemplateMessage | TextMessage) {
    this.message = message;
  }
  public toJson(): TemplateMessage | TextMessage {
    return this.message;
  }
}
