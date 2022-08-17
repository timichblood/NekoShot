import Carousel from "react-bootstrap/Carousel";
import photo1 from "../images/funko-c.jpg";
import photo2 from "../images/funko-ca.avif";
import photo3 from "../images/funko-car.jpg";

function Carusel() {
  return (
    <div className="all-carusel">
      <Carousel>
        <Carousel.Item style={{ height: 750 }}>
          <img className="d-block w-100 fluid" src={photo1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item style={{ height: 750 }}>
          <img className="d-block w-100" src={photo2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item style={{ height: 750 }}>
          <img className="d-block w-100" src={photo3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carusel;
