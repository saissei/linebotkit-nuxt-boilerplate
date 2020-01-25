export class VOToken {
  private token: string;
  public static of(token: string): VOToken {
    return new VOToken(token);
  }
  private constructor(token: string) {
    this.token = token;
  }
  public toString(): string {
    return this.token;
  }
}
