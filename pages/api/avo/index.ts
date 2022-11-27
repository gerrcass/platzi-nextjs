//import { IncomingMessage, ServerResponse } from 'http'
import { NextApiRequest, NextApiResponse } from 'next'

import DB from "@database";
//const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
    //response.end(JSON.stringify({ hello: 'world' }))


    const db = new DB()
    const allEntries = await db.getAll()
    const length = allEntries.length

    response.status(200).json({ data: allEntries, length })
}

export default allAvos