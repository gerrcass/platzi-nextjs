import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';

import DB from "@database";
const allAvos = async (req: NextApiRequest, res: NextApiResponse<TAPIAvoResponse>) => {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    const db = new DB()
    const allEntries = await db.getAll() //fake API call
    const length = allEntries.length

    res.status(200).json({ data: allEntries, length })
}

export default allAvos