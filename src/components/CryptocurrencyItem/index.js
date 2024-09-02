// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = cryptoDetails
  return (
    <li className="currency-item">
      <div className="logo-name">
        <img className="currency-logo" src={currencyLogo} alt={currencyName} />
        <p className="name">{currencyName}</p>
      </div>
      <div className="usd-euro">
        <p className="para">{usdValue}</p>
        <p className="para">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
