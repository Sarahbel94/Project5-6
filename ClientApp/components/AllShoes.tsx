import * as React from 'react'
import ShoeAPI from '../api'
import { Link } from 'react-router-dom'

// The AllShoes iterates over all of the Shoes and creates
// a link to their profile page.
const AllShoes = () => (
  <div>
    <ul>
      {
        ShoeAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/product/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default AllShoes
