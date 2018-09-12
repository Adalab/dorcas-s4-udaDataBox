import './fonts/fonts.css';

const DataBox = {
    backgroundColor: '#B7BCC6',
    padding: '15px',
    margin:'auto',
    minWidth:'430px',
    maxWidth:'700px',
    minHeight:'90px',
    maxHeight:'140px',
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const WrapperListStyle = {
  minWidth:'430px',
  maxWidth:'700px',
  display: 'flex',
  justifyContent: 'space-between'
}

const ListStyle = {
  listStyle: 'none',
  margin: '0',
  padding:'0',
}


const LiStyleIzd = {
  display: 'grid',
  gridTemplateColumns: '1fr auto auto',
  gridGap: '10px'
}

const LiStyleDer = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '20px'
}

const TextStyle = {
  fontFamily: 'Gotham-Light, sans serif'
}

const TextStyleBold = {
  fontFamily: 'Gotham-Bold, sans serif',
}

const Border = {
  marginTop:'0',
  marginBottom:'0',
  borderColor:'#9B9B9B'
}


export {DataBox, ListStyle, TextStyle, WrapperListStyle, TextStyleBold, LiStyleIzd, LiStyleDer, Border};
