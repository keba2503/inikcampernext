import {pool} from '../../config/db'


export default async function handler(req, res){

switch (req.method) {
    case 'GET':
        return res.status(200).json('product');
    case 'POST':  
            const result = await pool.query("INSERT INTO comment SET ?", {
            name: req.body.name,
            comment: req.body.comment
        })
        console.log(result)
        return res.status(200).json('Creando producto');
    default:
        break;
}

}