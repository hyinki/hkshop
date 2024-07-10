import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useGetProductsQuery } from '../slices/productApiSlice';

const HomeScreen = () => {
  const { data, isLoading, error } = useGetProductsQuery({ keyword: '', pageNumber: 1 });

  // Ensure that products is an array, defaulting to an empty array if undefined
  const products = data ? data.products : [];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {Array.isArray(products) && products.length > 0 ? (
              products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))
            ) : (
              <Message variant='info'>No products found</Message>
            )}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
