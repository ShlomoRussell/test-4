import mongoose from "mongoose";

const { model, Schema } = mongoose


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/BankAccounts');
}
const withdrawalAndDeposit = new Schema({
    date: Date,
    amount: Number
})
const loan = new Schema({

    rate: Number,
    payments: Number,

})
const AccountOperationsSchema = new Schema({
    accountNumber: Number,
    type: String,
    dateAndAmount: withdrawalAndDeposit,
    loanInfo: loan

})
const AccountOperations = model('AccountOperations', AccountOperationsSchema);


export const getAccountByAccountNumber = async (accountNumberValue) => {
    try {
        const account = await AccountOperations.find({ "accountNumber": accountNumberValue })
        if (account.length === 0) throw Error
        return account
    } catch (error) {
        throw new Error("Could not find account information at this time!")
    }
}

export const newWithdrawalOrDeposit = async (body) => {
    try {
        const operation = await AccountOperations.insertMany(body);
        return operation
    } catch (error) {
        throw new Error('Could not complete the operation at this time!')
    }
}

export const newLoan = async (body) => {
    try {
        const operation = await AccountOperations.insertMany(body)
        return operation
    } catch (error) {
        throw new Error('Could not complete the operation at this time!')
    }
}
