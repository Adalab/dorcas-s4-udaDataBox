var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import Data from '../Data';
import { getToken } from '../../services/auth.js';
import { getActive, getPeriod } from '../../services/active.js';
import { DataBox, TextStyle, Operation } from './UdaDataBoxStyles.js';
import PropTypes from 'prop-types';

var UdaDataBox = function (_Component) {
  _inherits(UdaDataBox, _Component);

  function UdaDataBox(props) {
    _classCallCheck(this, UdaDataBox);

    var _this = _possibleConstructorReturn(this, (UdaDataBox.__proto__ || Object.getPrototypeOf(UdaDataBox)).call(this, props));

    _this.state = {
      token: null,
      portfolioId: null,

      data: {
        stdDev: null,
        udaValue: null,
        method: '',
        udaNBH: null,
        udaCity: null,
        tendendy: null
      }
    };
    return _this;
  }

  _createClass(UdaDataBox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      getToken('adalab', '4286').then(function (res) {
        var portfolioID = res.data.portfolios.user['User adalab (Espa\xF1a)'].id;
        _this2.setState({
          token: res.data.authToken,
          portfolioId: portfolioID
        });
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this3 = this;

      if (this.state.token !== '' && this.state.token !== prevState.token && this.state.portfolioId !== '' && this.state.portfolioId !== prevState.portfolioId) {
        getActive(this.state.token, this.state.portfolioId, this.props.data).then(function (res) {
          var stdDev = res.data.forecast.ML1.std_dev / 100;
          _this3.setState({
            data: Object.assign({}, _this3.state.data, {
              stdDev: stdDev,
              udaValue: res.data.forecast.best_value,
              method: res.data.forecast.best_method
            })
          });
        });

        getPeriod(this.state.token).then(function (res) {
          var udaNBH = res['72400001000110001400000000000000000000']['1'].o_pm[0];
          console.log('udaNBH', udaNBH);
          var udaCity = res['72400001000110001400002000010000000000']['1'].o_pm[0];
          var tendendy = res['72400001000110001400002000010000000000']['1'].o_pu_qq[0];
          _this3.setState({
            data: Object.assign({}, _this3.state.data, {
              udaNBH: udaNBH,
              udaCity: udaCity,
              tendendy: tendendy
            })
          });
        });
      } else {
        return null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state$data = this.state.data,
          stdDev = _state$data.stdDev,
          udaValue = _state$data.udaValue,
          method = _state$data.method,
          udaNBH = _state$data.udaNBH,
          udaCity = _state$data.udaCity,
          tendendy = _state$data.tendendy;
      var operation = this.props.data.operation;

      var background = this.props.background;

      var operationText = void 0;
      if (operation === 0) {
        operationText = 'Rent';
      } else if (operation === 1) {
        operationText = 'Sale';
      } else {
        return null;
      }

      return React.createElement(
        'div',
        { style: Object.assign({}, DataBox, {
            backgroundColor: background
          })
        },
        React.createElement(Data, {
          stdDev: stdDev,
          udaValue: udaValue,
          method: method,
          udaNBH: udaNBH,
          udaCity: udaCity,
          tendendy: tendendy
        }),
        React.createElement(
          'span',
          { style: TextStyle },
          'Data shown for',
          React.createElement(
            'span',
            { style: Operation },
            operationText
          )
        )
      );
    }
  }]);

  return UdaDataBox;
}(Component);

UdaDataBox.propTypes = {
  background: PropTypes.string,
  data: PropTypes.object
};

export default UdaDataBox;