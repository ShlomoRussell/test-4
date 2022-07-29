import { Router } from 'express'
import { getAccountByAccountNumber, newWithdrawalOrDeposit,newLoan } from './dals/index.js';

const router = Router();
router.get('/:accountNumber', async (req, res) => {
    const accountNumber = req.params.accountNumber;
    try {
        const account = await getAccountByAccountNumber(accountNumber);
        return res.send(account)
    } catch (error) {
        return res.status(500).send(error.message)
    }

})

router.post('/withdrawalOrDeposit', async (req, res) => {
    try {
        await newWithdrawalOrDeposit(req.body)
        return res.send()
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

router.post('/loan', async (req, res) => {
    try {
        await newLoan(req.body)
        return res.send()
    } catch (error) {
        return res.status(500).send(error.message)
    }
})
export default router