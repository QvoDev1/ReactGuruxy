import Crsl from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = (props) => {
    return (
      <Crsl fade>
        { props.items.map(item => (
          <Crsl.Item>
            <img
              className="d-block w-100"
              src={item.src}
              alt={item.alt}
            />
          </Crsl.Item>
        )) }
      </Crsl>
    );
}

export default Carousel;