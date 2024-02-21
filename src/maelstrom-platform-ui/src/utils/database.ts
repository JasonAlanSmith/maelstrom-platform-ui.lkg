import { Pool } from 'pg';

const pool = new Pool({
  user: 'maelstrom',
  host: 'localhost',
  database: 'maelstrom',
  password: 'maelstrom',
  port: 5432,
});

const queryDb = async (sql: string) => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(sql, (err, res) => {
        if (err) {
          reject(err);
        }
        if (res && res.rows) {
          resolve(res.rows);
        } else {
          reject(new Error('No rows returned from query'))
        }
      });
    });
  } catch (err1) {
    console.error(err1);
    throw new Error('Internal server error');
  }
};

const execDb = async (sql: string) => {

}