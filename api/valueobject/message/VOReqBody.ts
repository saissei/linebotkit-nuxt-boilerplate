interface SOURCE {
  userId: string;
  type: string;
}

interface MESSAGE {
  type: string;
  id: string;
  text: string;
}

interface EVENTS {
  type: string;
  replyToken: string;
  source: SOURCE;
  timestamp: number;
  mode: string;
  message: MESSAGE;
}
export interface BODY {
  events: Array<EVENTS>;
  destination: string;
}

export class VOBody {
  private body: BODY;
  public static of(body: BODY): VOBody {
    return new VOBody(body);
  }
  private constructor(body: BODY) {
    this.body = body;
  }
  public toJson(): BODY {
    return this.body;
  }
  public toStringify(): string {
    return JSON.stringify(this.body);
  }
  public extractionType(): string {
    const type: string = this.body.events[0].message.type;
    return type;
  }
  public extractionMessage(): string {
    const message: string = this.body.events[0].message.text;
    return message;
  }
  public extractToken(): string {
    const token: string = this.body.events[0].replyToken;
    return token;
  }
  public extractValidateInfo(): string {
    const body: BODY = {
      events: [this.body.events[0]],
      destination: this.body.destination
    };
    return JSON.stringify(body);
  }
}
