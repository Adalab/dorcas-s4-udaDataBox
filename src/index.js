import React from 'react';
import ReactDOM from 'react-dom';
import UdaDataBox from './components/UdaDataBox';

const data = {
    backgroundColor: '',
    operation: '', // rent or sale
}

ReactDOM.render(<UdaDataBox config={data}/>, document.getElementById('root'));
