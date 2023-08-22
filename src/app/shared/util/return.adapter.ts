import { Result } from '../contracts/result.contract';

export class Return {
  public static invalidCredentials(): Result {
    return {
      ok: false,
      msg: 'Authentication failed',
      code: 401,
    };
  }

  public static success(msg: string, data: any): Result {
    return {
      ok: true,
      msg,
      data,
      code: 200,
    };
  }

  public static notFound(entity: string): Result {
    return {
      ok: false,
      msg: `${entity} not found`,
      code: 404,
    };
  }

  public static created(data: any, msg: string): Result {
    return {
      ok: true,
      msg,
      data,
      code: 201,
    };
  }

  public static alreadyExists() {
    return {
      ok: false,
      msg: 'Email already exists',
      code: 400,
    };
  }
}
