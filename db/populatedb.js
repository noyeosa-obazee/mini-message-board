#! /usr/bin/env node

const { Client } = require("pg");
const dotenv = require("dotenv");
dotenv.config();
const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
 text TEXT,
 sender VARCHAR (255),
 added TEXT
);

INSERT INTO messages (text,sender,added) 
VALUES ('Hello everyone','Odin','2025-04-09'), ('Hi!','Sammy','2025-02-05');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
