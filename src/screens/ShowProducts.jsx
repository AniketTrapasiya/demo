import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const ShowProducts = (props) => {

    const [products, setProducts] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const getProductsData = async () => {
            const { data } = await axios.get('http://127.0.0.1:8080/api/auth/allProducts')
            console.log(data)
            setProducts(data)
        }
        getProductsData()
    }, [])

    return (
        <>
            <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <Container className="justify-content-center p-2" >
                    <h1 className='text-center'>{props.heading}</h1>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Button className="btn btn-danger me-md-2" type="button" onClick={() => navigate('/addProduct')}>Add Product</Button>
                    </div>
                    <hr />

                    <Row>
                        {
                            products.map(product => {
                                return <Col md={6} lg={4} sm={12} key={product.id}>
                                 
                                        <Card className='shadow-lg m-2 p-3 rounded'style={{backgroundColor: props.mode ==='dark'?'lightgrey':'white', color: props.mode ==='dark'?'black':'black',width: '18rem' }} >
                                            <Card.Img src={`http://127.0.0.1:8080/${product.image}`} />
                                            <Card.Body>
                                                <Card.Title>Title: {product.title}</Card.Title>
                                                <Card.Title>Price: ${product.price}</Card.Title>
                                                <Card.Text>
                                                    Description: {product.description.slice(0, 10)}...
                                                </Card.Text>

                                                <Link to={`product/${product.id}`}>
                                                    <Button>Detail</Button>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    
                                </Col>
                            })
                        }
                    </Row>


                </Container>

            </div>
        </>
    )
}

export default ShowProducts
