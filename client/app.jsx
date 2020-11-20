import React from 'react';
import axios from 'axios';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentImages: [],
        allImages: []
    };
  }

  componentDidMount() {
    console.log('in component did mount');
    axios.get('http://localhost:3001/products/').then((results) => {
        this.setState({
            currentImages: results.data.slice(0, 4),
            allImages: results.data,
        });
    });
  }

  render() {
      return (
          <h1>App rendering</h1>
      );
  }
}

export default Carousel;
