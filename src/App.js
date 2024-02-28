import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CryptocurrencyTracker from './components/CryptocurrencyTracker'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={CryptocurrencyTracker} />
    </Switch>
  </BrowserRouter>
)

export default App
