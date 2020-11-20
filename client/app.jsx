import React from 'react';
import axios from 'axios';
import { Splide, SplideSlide } from '@splidejs/react-splide';



class ProductCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        allImages: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/products/').then((results) => {
        this.setState({
            allImages: results.data,
        });
    });
  }

  render() {
      const { allImages } = this.state;
      return (
          <div>
            <h3 style={{textAlign: "center"}}>SHOP BESTSELLERS</h3>
            <Splide
              options={ {
                  type: 'loop',
                  rewind : true,
                  perPage: 4,
                  perMove: 1,
                  gap    : '1rem',
                  updateOnMove: 'true',
                  width: '100%',
                  height: '30vh'
              } }
              onMoved={ ( splide, newIndex ) => { console.log( 'moved', newIndex ) } }
            >
              { allImages.map((prod) => {
                  return (
                    <SplideSlide key={ prod.id } >
                    <img 
                        src={ prod.images[0].src } 
                        alt={ prod.title } 
                        width="100px" 
                        height="100px" 
                        style={{display: "inline-block"}}
                    />
                    { prod.title }<br></br>
                    from { prod.variants[0].price }<br></br>
                    </SplideSlide>
                  );
              })}
            </Splide>
          </div>
      );
  }
}

export default ProductCarousel;
