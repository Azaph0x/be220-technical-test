import { Levels } from "./levels.model";

export type User = {
  userId?: string;
  email: string;
  name: string;
  birthDate: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  level: Levels;
}
