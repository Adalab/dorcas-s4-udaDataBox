var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { ListStyle, TextStyle, TextStyleBold, WrapperListStyle, LiStyleIzd, LiStyleDer, Border } from './DataStyles.js';
import PropTypes from 'prop-types';

var Data = function (_Component) {
  _inherits(Data, _Component);

  function Data() {
    _classCallCheck(this, Data);

    return _possibleConstructorReturn(this, (Data.__proto__ || Object.getPrototypeOf(Data)).apply(this, arguments));
  }

  _createClass(Data, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          stdDev = _props.stdDev,
          udaValue = _props.udaValue,
          method = _props.method,
          udaNBH = _props.udaNBH,
          udaCity = _props.udaCity,
          tendendy = _props.tendendy;


      var accuracy = void 0;
      var trend = void 0;

      if (stdDev > 0 && stdDev < 0.2) {
        accuracy = 'High';
      } else if (stdDev > 0.2 && stdDev < 0.4) {
        accuracy = 'Mid';
      } else {
        accuracy = 'Low';
      }

      if (tendendy > 0) {
        trend = 'Positive';
      } else if (tendendy < 0) {
        trend = 'Negative';
      } else {
        trend = 'Neutral';
      }

      return React.createElement(
        'div',
        { style: WrapperListStyle },
        React.createElement(
          'ul',
          { style: ListStyle },
          React.createElement(
            'li',
            { style: LiStyleIzd },
            React.createElement(
              'span',
              { style: TextStyleBold },
              'uDA Value:'
            ),
            React.createElement(
              'span',
              { style: TextStyle },
              udaValue
            ),
            React.createElement(
              'span',
              { style: TextStyleBold },
              '\u20AC'
            )
          ),
          React.createElement(
            'li',
            { style: LiStyleIzd },
            React.createElement(
              'span',
              { style: TextStyleBold },
              'uDA NBH:'
            ),
            React.createElement(
              'span',
              { style: TextStyle },
              udaNBH
            ),
            React.createElement(
              'span',
              { style: TextStyleBold },
              '\u20AC'
            )
          ),
          React.createElement(
            'li',
            { style: LiStyleIzd },
            React.createElement(
              'span',
              { style: TextStyleBold },
              'uDA City: '
            ),
            React.createElement(
              'span',
              { style: TextStyle },
              udaCity
            ),
            React.createElement(
              'span',
              { style: TextStyleBold },
              '\u20AC'
            )
          )
        ),
        React.createElement('hr', { style: Border }),
        React.createElement(
          'ul',
          { style: ListStyle },
          React.createElement(
            'li',
            { style: LiStyleDer },
            React.createElement(
              'span',
              { style: TextStyleBold },
              'Accuracy:'
            ),
            React.createElement(
              'span',
              { style: TextStyle },
              accuracy
            )
          ),
          React.createElement(
            'li',
            { style: LiStyleDer },
            React.createElement(
              'span',
              { style: TextStyleBold },
              'Method:'
            ),
            React.createElement(
              'span',
              { style: TextStyle },
              method
            )
          ),
          React.createElement(
            'li',
            { style: LiStyleDer },
            React.createElement(
              'span',
              { style: TextStyleBold },
              'Trend:'
            ),
            React.createElement(
              'span',
              { style: TextStyle },
              trend
            )
          )
        )
      );
    }
  }]);

  return Data;
}(Component);

Data.propTypes = {
  stdDev: PropTypes.number,
  udaValue: PropTypes.number,
  method: PropTypes.string,
  udaNBH: PropTypes.number,
  udaCity: PropTypes.number,
  tendendy: PropTypes.number
};

export default Data;