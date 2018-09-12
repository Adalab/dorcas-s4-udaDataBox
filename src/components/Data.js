import React, { Component } from 'react';

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
      <div className="Lista">
      <ul>
        <li>uDA Value: {udaValue}</li>
        <li>uDA NBH: {udaNBH}</li>
        <li>uDA City: {udaCity}</li>
        <li>Accuracy: {accuracy}</li>
        <li>Method: {method}</li>
        <li>Trend: {trend}</li>
      </ul>
      </div>
    );
  }
}

export default Data;
