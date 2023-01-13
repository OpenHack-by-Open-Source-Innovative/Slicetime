export class Logger {
  private _scope: string;
  private _logLevel: number;

  constructor(scope: string, logLevel: 1 | 2 | 3) {
    this._scope = scope;
    this._logLevel = logLevel;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public debug(message: string, ...data: any) {
    if (this._logLevel > 0) {
      this.log('debug', message, data);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public info(message: string, ...data: any) {
    if (this._logLevel > 1) {
      this.log('info', message, data);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public error(message: string, ...data: any) {
    if (this._logLevel > 2) {
      this.log('error', message, data);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private log(type: string, message: string, ...data: any) {
    console.log(
      `[${type}:${this._scope}]: ${message} ::: data >>> ${JSON.stringify(
        data
      )}`
    );
  }
}
