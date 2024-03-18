import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProductItems from '../data/ProductItems.json'
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <Container>
        <h1>Store</h1>
      <Row xs='1' md='2' lg='3'>
        {
            ProductItems.map((item)=>{
                return (
                    <Col key={item.id}>
                        <ProductCard {...item}/>
                    </Col>
                )
            })
        }
      </Row>
    </Container>
  )
}

export default Products
