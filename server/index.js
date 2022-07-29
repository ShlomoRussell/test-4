import express from 'express'
import {config}from 'dotenv'
import bankAccountsRouter from './bankAccountsRouter.js'
config()
const PORT = process.env.PORT || 5555;
const app = express();
app.use(express.json())

app.use('/banking',bankAccountsRouter )

app.listen(PORT, () => console.log(`connected via PORT ${PORT}`));