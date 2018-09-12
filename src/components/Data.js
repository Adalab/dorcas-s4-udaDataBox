import React, { Component } from 'react';
import { ListStyle, TextStyle, TextStyleBold, WrapperListStyle } from '../stylesheets/StylesDataBox.js';

class Data extends Component {
  render() {
    const {
      stdDev, udaValue, method, udaNBH, udaCity, tendendy,
    } = this.props;

    let accuracy;
    let trend;

    if (stdDev > 0 && stdDev < 0.2) {
      accuracy = 'High'
    } else if (stdDev > 0.2 && stdDev < 0.4) {
      accuracy = 'Mid'
    } else {
      accuracy = 'Low'
    }

    if (tendendy > 0) {
      trend = 'Positive'
    } else if (tendendy < 0) {
      trend = 'Negative'
    } else {
      trend = 'Neutral'
    }

    return (
      <div style={WrapperListStyle}>
      <ul style={ListStyle}>
        <li>
          <span style={TextStyleBold}>uDA Value: </span>
          <span style={TextStyle}>{udaValue}</span>
          <span style={TextStyleBold}>  €</span>
        </li>
        <li>
          <span style={TextStyleBold}>uDA NBH: </span>
          <span style={TextStyle}>{udaNBH}</span>
          <span style={TextStyleBold}>  €</span>
        </li>
        <li>
          <span style={TextStyleBold}>uDA City: </span>
          {udaCity}
          <span style={TextStyleBold}>  €</span>
        </li>
      </ul>
      <ul style={ListStyle}>
        <li><span style={TextStyleBold}>Accuracy: </span>{accuracy}</li>
        <li><span style={TextStyleBold}>Method: </span>{method}</li>
        <li><span style={TextStyleBold}>Trend: </span>{trend}</li>
      </ul>
      </div>
    );
  }
}

export default Data;
