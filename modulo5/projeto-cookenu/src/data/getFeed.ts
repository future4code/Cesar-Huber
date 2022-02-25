import { Post } from "../entities/types";
import { connection } from "./connection";

export const getFeed = async (user_id: string): Promise<Post[]> => {
  const feed = await connection.raw(`
    SELECT 
    R.id,
    R.title, 
    R.description,
    R.createdAt,
    U.id as userId,
    U.name as userName
    FROM P_cookenu_Recipes R
    INNER JOIN P_cookenu_Followers F ON R.user_id = F.follows_id
    INNER JOIN P_cookenu_Users U ON F.follows_id = U.id
    WHERE F.user_id = '${user_id}'
  `)

  return feed
}