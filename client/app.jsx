import React from 'react';
import axios from 'axios';
import { Splide, SplideSlide } from '@splidejs/react-splide';



class ProductCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentImages: [],
        allImages: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/products/').then((results) => {
        this.setState({
            currentImages: results.data.slice(0, 4),
            allImages: results.data,
        });
    });
  }

  render() {
      const { allImages } = this.state;
      return (
          <div>
            <Splide
              options={ {
                  type: 'loop',
                  rewind : true,
                  perPage: 4,
                  perMove: 1,
                  gap    : '1rem',
                  pagination: 'false',
                  updateOnove: 'true',
                  width: '80%',
                  height: '20vh'
              } }
              onMoved={ ( splide, newIndex ) => { console.log( 'moved', newIndex ) } }
            >
              { allImages.map((prod) => {
                  return (
                    <SplideSlide key={ prod.id } >
                      <img src={ prod.images[0].src } alt={ prod.title } width="100px" height="100px" style={{display: "inline-block"}}/>
                    </SplideSlide>
                  );
              })}
            </Splide>
          </div>
      );
  }
}

export default ProductCarousel;
