import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useRef, useState } from "react";



function AccountInfo() {
    const accountNumberRef = useRef()
    const [accountInfo, setAccountInfo] = useState(null)
    const [errors, setErrors] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (accountNumberRef.current.value) {
            fetch(`/banking/${accountNumberRef.current.value}`)
                .then(async res => {
                    if (!res.ok) {
                    const res_1 = await res.text();
                        throw new Error(res_1);

                    }
                    return res.json()
                })
                .then(Jres => {

                    setAccountInfo(Jres)
                    setErrors(null)
                })
                .catch(err => setErrors(err.message))
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
               <label> <h5>Enter Account number</h5>
                <input type='text' ref={accountNumberRef} /></label>
                <Button type="submit" >find account</Button></form>
            {accountInfo ? <Container fluid>
                <Row >
                    <Col >{accountInfo.map((info, i) => <Card key={i} style={{ width: '18rem' }}>
                        <Card.Header>Transaction info</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>accountNumber:{info.accountNumber}</ListGroup.Item>
                            <ListGroup.Item>type:{info.type}</ListGroup.Item>
                            <ListGroup.Item>amount:{info.dateAndAmount.amount}</ListGroup.Item>
                            <ListGroup.Item>date:{new Date(info.dateAndAmount.date).toLocaleString()}</ListGroup.Item>
                        </ListGroup>
                    </Card>)}</Col>
                </Row>

            </Container> : errors ? <p>{errors}</p> : null
            }

        </>

    );
}

export default AccountInfo