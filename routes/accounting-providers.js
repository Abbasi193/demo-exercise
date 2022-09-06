import { Router } from 'express'
import accountingProviders from '../configs/accounting-providers.js'
const router = Router()

router.get('/', (req, res) => {
    res.send({ data: accountingProviders })
})

export default router
