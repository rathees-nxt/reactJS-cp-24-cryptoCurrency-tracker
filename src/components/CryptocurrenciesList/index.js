// Write your JS code here
import {Component} from 'react'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptoData} = this.props
    return (
      <div className="tracker-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="crypto-list-container">
          <div className="list-header">
            <p className="list-heading">Coin Type</p>
            <div className="usdAndEuro-container">
              <p className="list-para">USD</p>
              <p className="list-para">EURO</p>
            </div>
          </div>
          <ul className="cryptocurrency-list">
            {cryptoData.map(eachData => (
              <CryptocurrencyItem key={eachData.id} cryptoDetails={eachData} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
