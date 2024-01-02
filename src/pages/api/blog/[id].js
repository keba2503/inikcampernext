import mysql from 'mysql2/promise';

export async function getArticleById(id) {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
    });

    const [rows] = await connection.execute('SELECT * FROM blog WHERE id = ?', [id]);
    return rows[0]; // Tomar el primer artículo (si existe) o devolver undefined si no se encuentra
}

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { id } = req.query;

        if (!id) {
            res.status(400).json({ message: 'Missing article ID' });
            return;
        }

        try {
            const article = await getArticleById(id);

            if (!article) {
                res.status(404).json({ message: 'Article not found' });
                return;
            }

            res.status(200).json(article);
        } catch (error) {
            console.error('Error fetching article details:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
