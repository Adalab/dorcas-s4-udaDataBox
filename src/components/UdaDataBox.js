import React, { Component } from 'react';
import Data from './Data.js';
import request from 'axios';

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
    this.getToken('adalab', '4286')
    this.getActive()
    this.getPeriod()
    this.getIndicator()
  }

  getToken(user, pwd) {
    const reports = {
      url: 'https://reds.urbandataanalytics.com/management/api/v1.0/login',
      data: { 'username': user, 'password': pwd },
      headers: { 'Content-Type': 'application/json' }
    };

    return new Promise((resolve, reject) => {
      request.post(reports.url, reports.data, { headers: reports.headers })
        .then(res => {
          resolve(res)
          console.log(res)
          const authToken = res.data.authToken;
          console.log(authToken)
          const portfolioID = res.data.portfolios.user[`User adalab (España)`].id
          console.log(portfolioID)
          this.setState({
            token: authToken,
            portfolioId: portfolioID
          }, () => console.log('token', this.state.token));
        })
        .catch(e => {
          //resolve(e.response.data.error)
          resolve(e.response)
        })
    })
  }

  getActive() {
    const reports = {
      url: `https://reds.urbandataanalytics.com/assets/api/v1.0/portfolio/426/asset`,
      data: { 'operation': '1', 'lat': 36.2794, 'lon': -6.08818, 'area': 120, 'simulated': true },
      headers: { 'Content-type': 'application/json', 'Authorization': 'Token ac7f1614-4d2e-48e7-90a1-1e33e32346ac' }
    }

    return new Promise((resolve, reject) => {
      request.post(reports.url, reports.data, { headers: reports.headers })
        .then(res => {
          resolve(res)
          const stdDev = (res.data.forecast.ML1.std_dev) / 100;
          const udaValue = res.data.forecast.best_value;
          const bestMethod = res.data.forecast.best_method;
          this.setState({
            stdDev: stdDev,
            udaValue: udaValue,
            method: bestMethod,
          }, () => console.log('Estado tras segunda llamada', this.state))
        })
        .catch(e => {
          //resolve(e.response.data.error)
          resolve(e.response)
        })
    })
  }

  getPeriod() {
    const reports = {
      url: 'https://reds.urbandataanalytics.com/reds/api/v1.0/period',
      headers: { 'Content-type': 'application/json', 'Authorization': 'Token ac7f1614-4d2e-48e7-90a1-1e33e32346ac' }
    }

    return new Promise((resolve, reject) => {
      request.get(reports.url, { headers: reports.headers })
        .then(res => {
          resolve(res)
          console.log('llamada 3', res)
          const currentPeriod = res.data.period.code
          this.setState({ currentPeriod: currentPeriod })
        })
        .catch(e => {
          //resolve(e.response.data.error)
          resolve(e.response)
        })
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
      <div className="App">
        <Data
          stdDev={stdDev}
          udaValue={udaValue}
          method={method}
          udaNBH={udaNBH}
          udaCity={udaCity}
          tendendy={tendendy}
        />

      </div>
    );
  }
}

export default UdaDataBox;
