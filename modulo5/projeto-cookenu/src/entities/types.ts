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

export interface Follower {
  id: string,
  user_id: string,
  follows_id: string
}

export interface Post {
  id: string, 
  title: string,
  description: string,
  createdAt: string,
  userId: string,
  userName: string
}