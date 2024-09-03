import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../ExampleCarouselImage/ExampleCarouselImage';

import image1 from '../../images/back ground cover2.jpg';
import image2 from '../../images/111.jpeg';
import image3 from '../../images/back ground cover3.jpg';

import './Slide.css'

function UncontrolledExample() {
  return (
    <Carousel>

      <Carousel.Item>
        <img src={image1} alt='First Slide'/>
        <Carousel.Caption>
          <h3 className="text-light">First slide label</h3>
          <p className="text-light">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={image2} alt="Second slide" /> 
        <Carousel.Caption>
          <h3 className="text-dark">Second slide label</h3>
          <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={image3} alt="Third slide" />
        <Carousel.Caption>
          <h3 className="text-danger">Third slide label</h3>
          <p className="text-danger">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default UncontrolledExample;


