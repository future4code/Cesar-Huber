import { connection } from "./connection"

export const createSQLTables = async () => {
  await connection.raw(`
    CREATE TABLE P_cookenu_Users (
      id varchar(36) primary key,
      name varchar(255) not null,
      email varchar(255) unique not null,
      password varchar(255) not null,
      role varchar(6) not null default 'NORMAL'
    );
  `)

  await connection.raw(`
      CREATE TABLE P_cookenu_Recipes (
        id varchar(36) primary key,
        user_id varchar(36) not null,
        title varchar(255) not null,
        description text not null,
        createdAt date not null,
        FOREIGN KEY (user_id) REFERENCES P_cookenu_Users(id)
      );
  `)

  await connection.raw(`
        CREATE TABLE P_cookenu_Followers (
          id varchar(36) primary key,
          user_id varchar(36) not null,
          follows_id varchar(36) not null,
          FOREIGN KEY (user_id) REFERENCES P_cookenu_Users(id),
          FOREIGN KEY (follows_id) REFERENCES P_cookenu_Users(id)
        );
  `)
}