import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';

import DB from "@database";
const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    const id = req.query.id
    const db = new DB()
    const avo = await db.getById(id as string)

    res.status(200).json(avo)
}

export default allAvos