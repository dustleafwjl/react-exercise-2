
import React from 'react';
import cardImg from '../../assets/shop.png'

const Badge = ({count}) => {
  return (
    <div style={{
      display: 'flex',
      // justifyContent: '',
      alignItems: 'center'
    }}>
      <img src={cardImg} style={{
        width: '20px',
        height: '20px',
        paddingRight: '2px'
      }}/>
      <div style={{
        width: '20px',
        height: '20px',
        backgroundColor: 'red',
        borderRadius: '6px',
        textAlign: 'center',
        fontSize: '14px',
        lineHeight: '20px',
        fontStyle: 'italic'
      }}>{count}</div>
    </div>
  )
}

export default Badge;