import React, { Component } from 'react';
import Data from '../Data';
import { getToken } from '../../services/auth.js'
import { getActive, getPeriod } from '../../services/active.js'
import { DataBox, TextStyle, Operation } from './UdaDataBoxStyles.js';
import PropTypes from 'prop-types';

class UdaDataBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null,
      portfolioId: null,

      data: {
        stdDev: null,
        udaValue: null,
        method: '',
        udaNBH: null,
        udaCity: null,
        tendendy: null,
      }
    }
  }

  componentDidMount() {
    getToken('adalab', '4286')
      .then(res => {
        const portfolioID = res.data.portfolios.user[`User adalab (España)`].id
        this.setState({
          token: res.data.authToken,
          portfolioId: portfolioID
        });
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.token !== ''
      && this.state.token !== prevState.token
      && this.state.portfolioId !== ''
      && this.state.portfolioId !== prevState.portfolioId) {
      getActive(this.state.token, this.state.portfolioId, this.props.data)
        .then(res => {
          const stdDev = (res.data.forecast.ML1.std_dev) / 100;
          this.setState({
            data:
            {
              ...this.state.data,
              stdDev: stdDev,
              udaValue: res.data.forecast.best_value,
              method: res.data.forecast.best_method,
            }
          })
        })

      getPeriod(this.state.token)
        .then(res => {
          const udaNBH = res['72400001000110001400000000000000000000']['1'].o_pm[0]
          console.log('udaNBH', udaNBH)
          const udaCity = res['72400001000110001400002000010000000000']['1'].o_pm[0]
          const tendendy = res[`72400001000110001400002000010000000000`][`1`].o_pu_qq[0]
          this.setState({
            data:
            {
              ...this.state.data,
              udaNBH: udaNBH,
              udaCity: udaCity,
              tendendy: tendendy,
            }
          })
        })
    } else {
      return null
    }
  }

  render() {
    const {
      stdDev,
      udaValue,
      method,
      udaNBH,
      udaCity,
      tendendy,
    } = this.state.data;
    const { operation } = this.props.data;
    const background = this.props.background;

    let operationText;
    if (operation === 0) {
      operationText = 'Rent'
    } else if (operation === 1) {
      operationText = 'Sale'
    } else {
      return null;
    }

    return (
      <div style={{
        ...DataBox,
        backgroundColor: background
      }}
      >
        <Data
          stdDev={stdDev}
          udaValue={udaValue}
          method={method}
          udaNBH={udaNBH}
          udaCity={udaCity}
          tendendy={tendendy}
        />
        <span style={TextStyle}>
          Data shown for
          <span style={Operation}>
            {operationText}
          </span>
        </span>
      </div>
    );
  }
}

UdaDataBox.propTypes = {
  background: PropTypes.string,
  data: PropTypes.object,
}

export default UdaDataBox;