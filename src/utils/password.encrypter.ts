import * as bcrypt from 'bcrypt';

export async function passwordHash(password: string) {
  return await bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, hashPassword: string) {
  return await bcrypt.compare(password, hashPassword);
}
