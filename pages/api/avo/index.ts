import { NextApiRequest, NextApiResponse } from 'next'


import DB from "@database";
const allAvos = async (req: NextApiRequest, res: NextApiResponse<TAPIAvoResponse>) => {
    const db = new DB()
    const allEntries = await db.getAll()
    const length = allEntries.length

    res.status(200).json({ data: allEntries, length })
}

export default allAvos