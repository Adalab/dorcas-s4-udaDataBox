import React from 'react';
import ReactDOM from 'react-dom';
import UdaDataBox from './components/UdaDataBox';

<<<<<<< HEAD
const colBackground = '#B7BCC6';


ReactDOM.render(<UdaDataBox background={colBackground} />, document.getElementById('root'));
=======
const data = {
    backgroundColor: '#B7BCC6',
    operation: '', // rent or sale
}

ReactDOM.render(<UdaDataBox config={data}/>, document.getElementById('root'));
>>>>>>> b8a0dbe08e951ff424422038b4fcc9627bc267a9
