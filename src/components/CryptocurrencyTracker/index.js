// Write your code here
// npm i react-router-dom@5.2.0

import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="home-container">
        <div>
          <CryptocurrenciesList />
        </div>
      </div>
    )
  }
}
export default CryptocurrencyTracker
