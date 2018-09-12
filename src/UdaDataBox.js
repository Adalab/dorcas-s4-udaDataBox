import React, { Component } from 'react';
import List from './List.js';
import Coordinates from './Coordinates.js';
import { DataBox } from '../stylesheets/DataBox';

class UdaDataBox extends Component {
  render() {
    return (
      <div style={DataBox}>
        <List />
        <Coordinates />
      </div>
    );
  }
}

export default UdaDataBox;
