import { NextApiRequest, NextApiResponse } from 'next'

const yesOrNo = async (req: NextApiRequest, res: NextApiResponse) => {
    const result = Math.round(Math.random()) ? 'Yes' : 'No'

    res.status(200).json({ data: result })
}

export default yesOrNo