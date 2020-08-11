import React from 'react';
import Card from '../Card/Card';

const CardList = ({title, cardList, addToCard}) => {
  console.log(cardList);
  return (
    <div>
      <div style={{
        fontSize: '20px',
        height: '20px',
        lineHeight: '20px'
      }}>{title}</div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px 0'
      }}>
        {
          cardList.map((ele, index) => {
            return <Card card={ele} key={ele.name + index} handleClick={addToCard}/>
          })
        }
      </div>
    </div>
  )
}

export default CardList;