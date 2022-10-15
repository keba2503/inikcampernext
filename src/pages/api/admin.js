

import {pool} from '../../config/db'


export default async function handler  ( req, res) {

const [rows] = await pool.query('SELECT NOW()');

console.log(rows[0]);


    
    res.status(200)
   return  res.json((rows[0])['NOW()'])


}


