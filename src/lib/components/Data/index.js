import React, { Component } from 'react';
import { ListStyle,
         TextStyle,
         TextStyleBold,
         WrapperListStyle,
         LiStyleIzd,
         LiStyleDer,
         Border } from './DataStyles.js';

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
        <li style={LiStyleIzd}>
          <span style={TextStyleBold}>uDA Value: </span>
          <span style={TextStyle}>   {udaValue}</span>
          <span style={TextStyleBold}>  €</span>
        </li>
        <li style={LiStyleIzd}>
          <span style={TextStyleBold}>uDA NBH: </span>
          <span style={TextStyle}>{udaNBH}</span>
          <span style={TextStyleBold}>  €</span>
        </li>
        <li style={LiStyleIzd}>
          <span style={TextStyleBold}>uDA City: </span>
          <span style={TextStyle}>{udaCity}</span>
          <span style={TextStyleBold}>  €</span>
        </li>
      </ul>
      <hr style={Border}/>
      <ul style={ListStyle}>
        <li style={LiStyleDer}>
          <span style={TextStyleBold}>Accuracy: </span>
          <span style={TextStyle}>{accuracy}</span>
        </li>
        <li style={LiStyleDer}>
          <span style={TextStyleBold}>Method: </span>
          <span style={TextStyle}>{method}</span>
        </li>
        <li style={LiStyleDer}>
          <span style={TextStyleBold}>Trend: </span>
          <span style={TextStyle}>   {trend}</span>
        </li>
      </ul>
      </div>
    );
  }
}

export default Data;
