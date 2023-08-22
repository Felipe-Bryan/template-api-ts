import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

export class JwtService {
  // QUANDO FAZ O LOGIN
  public createToken(data: any): string {
    return jwt.sign(data, process.env.JWT_SECRET!);
  }

  // SÓ PARA SABER SE É VÁLIDO OU NÃO
  public verifyToken(token: string): boolean {
    try {
      jwt.verify(token, process.env.JWT_SECRET!);
      return true;
    } catch {
      return false;
    }
  }

  // PRECISA DA INFORMAÇÃO
  public decodeToken(token: string): any {
    const result = jwt.decode(token);

    if (!result) {
      return null;
    }

    return result;
  }
}
