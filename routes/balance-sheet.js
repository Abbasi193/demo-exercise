import { Router } from 'express'
import Data from '../models/Data.js'
import fetchSheet from '../services/fetch-sheet.js'

const router = Router()

router.post('/', async (req, res) => {
    try {
        if (!req.cookies.userId) throw Error("Start Application First")

        let { userId } = req.cookies
        const { name, year, amount, provider } = req.body
        if (!name || !year || !amount || !provider)
            throw Error("Please Complete Applicaton")
        
        let sheet = fetchSheet()
        const user = await Data.findOne({ userId })
        if (!user) {
            await Data.create({ userId, sheet })
        }

        res.send({ msg: 'Balanced Sheet', data: sheet })

    } catch (e) {
        res.status(400).send({ msg: e.message })
    }

})

export default router