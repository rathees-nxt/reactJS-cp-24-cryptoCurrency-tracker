// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {cryptoData: [], isloading: true}

  componentDidMount() {
    this.fetchCryptoData()
  }

  fetchCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const cryptoDatas = await response.json()
    console.log(cryptoDatas)

    const formattedCryptoDatas = cryptoDatas.map(eachCryptoData => ({
      id: eachCryptoData.id,
      currencyName: eachCryptoData.currency_name,
      currencyLogo: eachCryptoData.currency_logo,
      euroValue: eachCryptoData.euro_value,
      usdValue: eachCryptoData.usd_value,
    }))
    console.log(formattedCryptoDatas)
    this.setState({cryptoData: formattedCryptoDatas, isloading: false})
  }

  render() {
    const {cryptoData, isloading} = this.state
    return (
      <div className="main-container">
        {isloading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptoData={cryptoData} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
