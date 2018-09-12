import React, { Component } from 'react';
import Data from './Data.js';
import request from 'axios';
import { getToken } from '../services/auth.js'
import { getActive } from '../services/active.js'
import { getPeriod } from '../services/currentPeriod.js';
import { DataBox, TextStyle, TextStyleBold } from '../stylesheets/StylesDataBox.js';

class UdaDataBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null,
      portfolioId: null,
      stdDev: null,
      udaValue: null,
      method: '',
      currentPeriod: '',
      udaNBH: null,
      udaCity: null,
      tendendy: '',
    }
  }

  componentDidMount() {
    getToken('adalab', '4286')
      .then(res => {
        const portfolioID = res.data.portfolios.user[`User adalab (España)`].id
        this.setState({
          token: res.data.authToken,
          portfolioId: portfolioID
        }, () => console.log('token', this.state.token));
      })
      .then(getActive('ac7f1614-4d2e-48e7-90a1-1e33e32346ac')
        .then(res => {
          const stdDev = (res.data.forecast.ML1.std_dev) / 100;
          this.setState({
            stdDev: stdDev,
            udaValue: res.data.forecast.best_value,
            method: res.data.forecast.best_method,
          }, () => console.log('Estado tras segunda llamada', this.state))
        })
      )

    // getActive('ac7f1614-4d2e-48e7-90a1-1e33e32346ac')
    //   .then(res => {
    //     const stdDev = (res.data.forecast.ML1.std_dev) / 100;
    //     this.setState({
    //       stdDev: stdDev,
    //       udaValue: res.data.forecast.best_value,
    //       method: res.data.forecast.best_method,
    //     }, () => console.log('Estado tras segunda llamada', this.state))
    //   })

    getPeriod()
      .then(res => {
        this.setState({ currentPeriod: res.data.period.code }, () => console.log('Working'))
      })
  }



  getIndicator() {
    const reports = {
      url: 'https://reds.urbandataanalytics.com/urban/api/v1.0/indicators?keys=o_pm,o_pu_qq&operations=1&geo_json={%22type%22:%22FeatureCollection%22,%22features%22:[{%22type%22:%22Feature%22,%22geometry%22:{%22type%22:%22Point%22,%22coordinates%22:[-6.08818,36.2794]},%22properties%22:{%22admin_levels%22:[3,5]}}]}&period_codes=2018Q1',
      headers: { 'Content-type': 'application/json', 'Authorization': 'Token ac7f1614-4d2e-48e7-90a1-1e33e32346ac' }
    }

    return new Promise((resolve, reject) => {
      request.get(reports.url, { headers: reports.headers })
        .then(res => {
          resolve(res)
          console.log('llamada 4', res)
          const udaNBH = res.data[`2018Q1`][`72400001000110001400000000000000000000`][`1`].o_pm[0]
          const udaCity = res.data[`2018Q1`][`72400001000110001400002000010000000000`][`1`].o_pm[0]
          const tendendy = res.data[`2018Q1`][`72400001000110001400002000010000000000`][`1`].o_pu_qq[0]

          this.setState({
            udaNBH: udaNBH,
            udaCity: udaCity,
            tendendy: tendendy,
          })
        })
        .catch(e => {
          //resolve(e.response.data.error)
          resolve(e.response)
        })
    })
  }

  render() {
    const {
      stdDev, udaValue, method, udaNBH, udaCity, tendendy,
    } = this.state;
    return (
      <div style= { DataBox } >
        <Data
          stdDev={stdDev}
          udaValue={udaValue}
          method={method}
          udaNBH={udaNBH}
          udaCity={udaCity}
          tendendy={tendendy}
        />
        <span style={TextStyleBold}>Data shown for {'operation'} </span>
      </div>
    );
  }
}

export default UdaDataBox;
