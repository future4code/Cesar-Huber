import { Follower } from "../entities/types";
import { connection } from "./connection";

export const insertFollower = async (follower: Follower): Promise<void> => {
  await connection('P_cookenu_Followers').insert(follower)
}