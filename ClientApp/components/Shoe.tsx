import * as React from 'react'
import ShoeAPI from '../api'
import { Link } from 'react-router-dom'

// The Shoe looks up the Shoe using the number parsed from
// the URL's pathname. If no Shoe is found with the given
// number, then a "Shoe not found" message is displayed.
const Shoe = (props: any) => {
  const Shoe = ShoeAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!Shoe) {
    return <div>Sorry, but the Shoe was not found</div>
  }
  return (
    <div>
      <h1>{Shoe.name} (#{Shoe.number})</h1>
      <h2>Position: {Shoe.position}</h2>
      <Link to='/product'>Back</Link>
    </div>
  )
}

export default Shoe
