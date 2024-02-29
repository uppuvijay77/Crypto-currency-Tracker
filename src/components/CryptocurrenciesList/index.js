// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyData: {}, isLoading: true}

  componentDidMount() {
    this.getCorrencieDetailes()
  }

  getCorrencieDetailes = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))
    console.log(updatedData.map(each => each.currencyLogo))

    this.setState({currencyData: updatedData, isLoading: false})
  }

  render() {

    const {currencyData, isLoading} = this.state

    return (<div>
    
      {isLoading ? (
        <div data-testid="loader">
           <Loader type="TailSpin" color="#ffffff" height={50} width={50} />
        </div>
        ) : (
        <div className="Cryptocurrency-List-container">
          <h1 className="title">Cryptocurrency Tracker</h1>
          <img
            className="cryptocurrency-image"
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
          />
          <div className="crypto-list-container">
            <div className="crypto-details-value-container">
              <p className="column-name">Coin Type</p>
              <div className="value-details">
                <p className="column-name">USD</p>
                <p className="column-name">EURO</p>
              </div>
            </div>
            <ul>
              {currencyData.map(eachCrypto => (
                <CryptocurrencyItem
                  cryptoDetails={eachCrypto}
                  key={eachCrypto.id}
                />
              ))}
            </ul>
          </div>
        </div>
        )}
      </div>        
    )
  }
}

export default CryptocurrenciesList,
