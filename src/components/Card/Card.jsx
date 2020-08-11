import React from 'react'
import cardImg from '../../assets/product_image_placeholder.png'
import styles from './style.module.scss'

const Card = ({card, handleClick}) => {
  return (
    <div className={styles['card']}>
      <div className={styles['title']}>{card.name}</div>
      <img src={cardImg}/>
      <div className={styles['price']}>
        {card.price}
        <button onClick={handleClick}>add to card</button>
      </div>
    </div>
  )
}

export default Card;