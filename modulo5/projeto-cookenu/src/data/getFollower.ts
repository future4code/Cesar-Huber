import { Follower } from "../entities/types";
import { connection } from "./connection";

export const getFollower = async (user_id: string, follows_id: string): Promise<Follower> => {
  const [result] = await connection('P_cookenu_Followers').where({user_id, follows_id})
  return result
}