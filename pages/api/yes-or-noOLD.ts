import { NextApiRequest, NextApiResponse } from 'next'

const test = async (req: NextApiRequest, res: NextApiResponse) => {


    res.status(200).json({ data: "This is a test", length: "This is a test".length })
}

export default test