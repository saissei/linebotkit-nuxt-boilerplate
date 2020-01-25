import { IncomingHttpHeaders } from 'http';

export interface HEADER extends IncomingHttpHeaders {
  'x-line-signature'?: string;
}

export class VOHeaders {
  private headers: HEADER;
  public static of(headers: HEADER): VOHeaders {
    return new VOHeaders(headers);
  }
  private constructor(headers: HEADER) {
    this.headers = headers;
  }
  public toJson(): HEADER {
    return this.headers;
  }
  public extractSignature(): string | undefined {
    return this.headers['x-line-signature'];
  }
}
