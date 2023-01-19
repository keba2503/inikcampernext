import { createPool } from 'mysql2/promise'




const pool = createPool({
  host: '5.22.216.113',
  user: 'inikcamperbd',
  password: process.env.DB_PASSWORD,
  port: 3306,
  database: 'pruebadb',
})

export { pool }
