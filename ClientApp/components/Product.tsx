import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import AllShoes from './AllShoes'
import Shoe from './Shoe'

// The product component matches one of two different routes
// depending on the full pathname
const Product = () => (
  <Switch>
    <Route exact path='/product' component={AllShoes}/>
    <Route path='/product/:number' component={Shoe}/>
  </Switch>
)


export default Product
