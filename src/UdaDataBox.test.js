import React from 'react';
import ReactDOM from 'react-dom';
import UdaDataBox from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UdaDataBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
