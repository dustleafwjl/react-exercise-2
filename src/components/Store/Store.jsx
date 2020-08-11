import React from 'react'
import Badge from '../Badge/Badge'
import CardList from '../CardList/CardList'

import styles from './styles.module.scss'
import {getData} from '../../API/index'

class Store extends React.Component {

  state ={
    count: 0,
    cardListData: []
  }

  componentWillMount() {
    const data = getData();
    data.then(res => {
      this.setState({
        cardListData: this.formatData(res)
      });
    })
  }

  addToCard = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  

  formatData(data) {
    let cardListArr = [];
    const cardType = [];
    data.forEach(ele => {
      if(!cardType.includes(ele.category)) {
        cardType.push(ele.category);
      }
    })
    cardListArr = cardType.map(type => {
      return {
        category: type,
        cards: data.filter(card => card.category === type)
      };
    });
    return cardListArr;
  }

  render() {
    return (
      <div className={styles.store}>
        <header>
          <div className={styles.title}>Store</div>
          <Badge count={this.state.count}/>
        </header>
        <main style={{
          padding: '20px'
        }}>
          {
            this.state.cardListData
              .map((ele, index) => 
                <CardList title={ele.category} cardList={ele.cards} addToCard={this.addToCard}  key={index+'dd'}/>
              )
          }
        </main>
      </div>
    )
  }
}

export default Store;