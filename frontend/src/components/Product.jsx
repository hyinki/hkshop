import React from 'react'
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Rating from './Rating'
import '../assets/styles/index.css'

const Product = ({product}) => {
  return (
    <Card className="my-3 p-3 rounded product-card">
        <Link to={`/product/${product._id}`} className="product-link">
            <Card.Img src={product.image} variant='top' />
       
        </Link>
        <Card.Body>
            <Link to={`/product/${product._id}`} className="product-link">
                <Card.Title as="div" className='product-title'>
                    <strong>{product.name}</strong>
                </Card.Title>

                <Card.Text as="h5">
                    ${product.price}
                </Card.Text>
            </Link>
            {/* <Card.Text as='div'>
                <Rating value={product.rating} text={`${product.numReviews} reviews`}  />
            </Card.Text> */}
        </Card.Body>

    </Card>
  )
}

export default Product
