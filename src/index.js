import React from 'react';
import ReactDOM from 'react-dom';
import UdaDataBox from './components/UdaDataBox/UdaDataBox';
import './stylesheets/fonts/fonts.css';

const backgroundColor = '#B7BCC6';
const dataSearch = {
  address: "Calle Almagro, 20",
  operation: 1,
  lat: 40.4562923,
  lon: -3.6768079,
  area: 90,
  property_type: 4,
  construction_type: 2,
  rooms: 3,
  energy_cert: 1,
  storage: 0,
  garage: 0,
  pool: 0,
  ac: 1,
  elevator: 1,
  outside: 0,
  agency: 1,
  bathrooms: 1,
  floor: 5,
  common_zones: 1,
  orientation_north: 1,
  orientation_south: 1,
  orientation_east: 1,
  orientation_west: 1,
  status: 5
}

ReactDOM.render(<UdaDataBox background={backgroundColor} data={dataSearch} />, document.getElementById('root'));
