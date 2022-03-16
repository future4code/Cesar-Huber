import { Follower } from "../entities/types";
import { connection } from "./connection";

export const deleteFollower = async (follower: Follower): Promise<void> => {
  await connection('P_cookenu_Followers')
    .where(follower)
    .del()
}