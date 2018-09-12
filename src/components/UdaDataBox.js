import React, { Component } from 'react';
import Data from './Data.js';
import { getToken } from '../services/auth.js'
import { getActive, getPeriod } from '../services/active.js'
import { DataBox, TextStyle, TextStyleBold } from '../stylesheets/StylesDataBox.js';

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
        tendendy: '',
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
      getActive(this.state.token, this.state.portfolioId)
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
              const udaNBH = res.data[`2018Q1`][`72400001000110001400000000000000000000`][`1`].o_pm[0]
              const udaCity = res.data[`2018Q1`][`72400001000110001400002000010000000000`][`1`].o_pm[0]
              const tendendy = res.data[`2018Q1`][`72400001000110001400002000010000000000`][`1`].o_pu_qq[0]

              this.setState({
                data:
                {
                  ...this.state.data,
                  udaNBH: udaNBH,
                  udaCity: udaCity,
                  tendendy: tendendy,
                }
              })
            }
            )
        

    } else {
      console.log('Loading...')
    }
  }

  render() {
    const {
      stdDev, udaValue, method, udaNBH, udaCity, tendendy,
    } = this.state.data;
    const background = this.props.background;
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
        <span style={TextStyle}>Data shown for {'operation'} </span>
      </div>
    );
  }
}

export default UdaDataBox;
