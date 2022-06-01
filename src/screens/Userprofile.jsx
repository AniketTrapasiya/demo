import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// import store from '../components/Stores/Store';

const Userprofile = () => {

    const { id } = useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhonenumber] = useState('')

        // const userData = store.getState().user;
        // console.log(userData);



    useEffect(() => {
        const getUsersData = async () => {
            console.log(id)
            const { data } = await axios.get(`http://localhost:8080/api/auth/getuser?id=${id}`)
            console.log(data)

            setName(data.name)
            setEmail(data.email)
            setPhonenumber(data.phonenumber)
        }
        getUsersData()

    }, [id])

    return (
        <>
            <Container className="justify-content-center p-2">
                <h1 className='text-center'>User Profile</h1>
                <hr />
                <Row>
                    <Card className='shadow-lg m-2 p-3 rounded ' style={{ width: '18rem', height: '12rem' }}>
                        <Card.Body>
                            <Card.Title>Name: {name}</Card.Title>
                            <Card.Title>Email: {email}</Card.Title>
                            <Card.Text>
                                Phonenumber: {phonenumber}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>

            </Container>


        </>
    )
}

export default Userprofile
