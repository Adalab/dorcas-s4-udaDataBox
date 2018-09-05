import React, { Component } from 'react';
import List from './List.js';
import Coordinates from './Coordinates.js';
class UdaDataBox extends Component {
  render() {
    return (
      <div className="App">
        <List />
        <Coordinates />
      </div>
    );
  }
}

export default UdaDataBox;
