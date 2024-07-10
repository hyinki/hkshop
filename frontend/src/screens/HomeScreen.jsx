import React from 'react';
import { useParams } from 'react-router-dom';

import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';

import { useGetProductsQuery } from '../slices/productApiSlice';

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({ keyword, pageNumber: 1 });

  // Ensure that products is an array, defaulting to an empty array if undefined
  const products = data ? data.products : [];

  return (
    <>
    {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light mb-4'>
          Go Back
        </Link>
      )}

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error?.data?.message || error.error}</Message>
      ) : (
        <>
        <Meta title={"shop"}/>
          <h1>Latest Products</h1>
          <Row>
            {Array.isArray(products) && products.length > 0 ? (
              data.products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))
            ) : (
              <Message variant='info'>No products found</Message>
            )}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
