import * as React from 'react'
import ShoeAPI from '../api'
import { Link } from 'react-router-dom'

//The AllShoes iterates over all of the shoes and creates a link to every shoe's product page, displays the name and the image.
const AllShoes = () => (
  <div>
    <ul>
      {
        ShoeAPI.all().map(p => ( 
            <Link to={`/product/${p.number}`}>{p.name}
                                              <br/>
                                              <img src={p.image}/>
                                              <br/> 
                                              </Link>
        ))
      }
    </ul>
  </div>
)

export default AllShoes
