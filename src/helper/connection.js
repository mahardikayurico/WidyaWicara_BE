require("dotenv").config({ path: "../../.env" });
const { Client } = require("pg");

const db = new Client({
  user: "postgres",
  host: "db.lclqkorpkwgoxylhingl.supabase.co",
  database: "postgres",
  password: "Gatotkaca93",
  port: 5432,
});
console.log(process.env.DB_USER);

db.connect((err) => {
  if (!err) {
    console.log("database aman");
  } else {
    console.log("db conection eror");
  }
});
module.exports = db;
