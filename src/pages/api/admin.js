import mysql from 'mysql2/promise';

export async function getDatos() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
    });

    const [rows] = await connection.execute('SELECT * FROM guide_user');
    return rows;
}

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const datos = await getDatos();
            res.status(200).json(datos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
