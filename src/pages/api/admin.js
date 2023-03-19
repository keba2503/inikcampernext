import mysql from 'mysql2/promise';

export async function getDatos() {
    const connection = await mysql.createConnection({
        host: '5.22.216.113',
        user: 'inikApi',
        password: '2015inik',
        port: 3306,
        database: 'inikApi',
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