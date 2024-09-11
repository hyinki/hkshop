import { Carousel, Image } from 'react-bootstrap';
import pic1 from './Images/pic1.png'; // Import the image correctly
import pic2 from './Images/pic2.png'; // Add more static images as needed
import pic3 from './Images/pic3.png';

const ProductCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image src={pic1} alt="First slide" fluid /> {/* Use the Image component to render the imported image */}
        
      </Carousel.Item>

      <Carousel.Item>
        <Image src={pic2} alt="Second slide" fluid /> {/* Use the Image component to render the second image */}
        
      </Carousel.Item>

      <Carousel.Item>
        <Image src={pic3} alt="Third slide" fluid /> {/* Use the Image component to render the third image */}
        
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarousel;
