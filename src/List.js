import React, { Component } from 'react';
import Item from './Item.js';
import { ListStyle } from './stylesheets/StylesDataBox';

const items= ['uDa Value', 'uDa NBH', 'uDa City', 'uDa Accuracy', 'uDa Method', 'uDa Trend']
class List extends Component {
  render() {
    return (
      <ul style={ListStyle}>
        {
          items.map((item,index) => {
            return (
              <li key={index}>
                  <Item
                  />
            </li>)
          })
        }
      </ul>
    );
  }
}

export default List;
