import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';

const yesOrNo = async (req: NextApiRequest, res: NextApiResponse) => {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    const result = Math.round(Math.random()) ? 'Yes' : 'No'

    res.status(200).json({ data: result })
}

export default yesOrNo