import { ROLES } from "./classes";

export interface AuthenticationData {
  id: string,
  role: ROLES
}

export interface Recipe {
  id: string,
  user_id: string,
  title: string,
  description: string,
  createdAt: string
}