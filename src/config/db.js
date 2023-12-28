import { createPool } from 'mysql2/promise'

const pool = createPool({
  host: '5.22.216.113',
  user: 'inikApi',
  password: '2015inik',
  port: 3306,
  database: 'inikApi',
})

export { pool }
