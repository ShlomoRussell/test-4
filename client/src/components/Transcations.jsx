
import { useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
function Transcations() {
    const [transaction, setTransaction] = useState({ type: "Withdraw" })
    const handleSubmit = (e) => {
        e.preventDefault()
        const urlEnding = transaction.type === "Loan" ? "loan" : 'withdrawalOrDeposit'
        fetch(`/banking/${urlEnding}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transaction)
        })
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <label>
                <h5>Enter Account number</h5>
                <input type='text' onChange={(e) => setTransaction({ ...transaction, accountNumber: e.target.value })} />
            </label>
            <label>Transaction Type{' '}
                <select onChange={(e) => setTransaction({ ...transaction, type: e.target.value })} >
                    <option value="Withdraw">Withdraw</option>
                    <option value="Deposit">Deposit</option>
                    <option value="Loan">Loan</option>
                </select>
            </label>
            <label>{transaction.type} amount: <input type="number" onChange={(e) => setTransaction({ ...transaction, dateAndAmount: { amount: e.target.value } })} /></label>

            {transaction.type === 'Loan' ?
                <>
                    <label >amount of payments: <input type="number" onChange={(e) => setTransaction({ ...transaction, LoanInfo: { payments: e.target.value } })} /></label>
                    <label > interest: <input type="number" onChange={(e) => setTransaction({ ...transaction, LoanInfo: { rate: e.target.value } })} /></label>
                </> :
                null}
            <br />
            <Button type='submit'>save</Button>
        </form>
    </>
    );
}

export default Transcations