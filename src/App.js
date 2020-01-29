import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder'
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'


const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/checkout' component={Checkout} />
        <Route path='/orders' component={Orders} />
        <Route path='/' exact component={BurguerBuilder} />
      </Switch>
    </Layout>
  )
}
 
export default App
