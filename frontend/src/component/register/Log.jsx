import React, { useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import axios from 'axios';

function Log() {
    const [user, setUser] = useState(null)

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const onSubmitHandler = () => {
        console.log(user)
        // alert(JSON.stringify(user, null, 2))
        axios.post("http://localhost:8080/add-user", user)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.error(err))
    }



    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={5} >
                    <Card className="mt-4 p-4">
                        <h3>Login</h3>
                        <hr />
                        <div className='mt-2'>
                            <input type="text" name="name" className="form-control" onChange={onChangeHandler} placeholder='Name' />
                        </div>
                        <div className='mt-2'>
                            <input type="text" name="email" className="form-control" onChange={onChangeHandler} placeholder='Email ' />
                        </div>
                        <div className='mt-2'>
                            <input type="text" name="password" className="form-control" onChange={onChangeHandler} placeholder='password ' />
                        </div>
                        <div className='mt-2'>
                            <button onClick={onSubmitHandler} className='btn btn-primary'>Submit</button>
                        </div>
                    </Card>
                    <div>
                    </div>
                </Col>
            </Row>
        </Container >
    )
}

export default Log
