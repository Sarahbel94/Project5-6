import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import Shoplanding from './AllShoes'
import Shopcomponent from './Shopcomponent'

// The product component matches one of two different routes
// depending on the full pathname
const Shoppingcart = () => (
  <Switch>
    <Route exact path='/shoppingcart' component={Shoplanding}/>
    <Route path='/shoppingcart/:number' component={Shopcomponent}/>
  </Switch>
)


export default Shoppingcart
