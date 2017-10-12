import * as React from 'react'
import ShoeAPI from '../api'
import * as Types from './custom_types'
import { Link,
         NavLink, } from 'react-router-dom'
import { ButtonToolbar, 
         Button, 
         Grid, 
         Row, 
         Col, 
         Image, 
         Thumbnail,
         Tooltip,
         OverlayTrigger,
         Modal,
         Popover } from 'react-bootstrap';

// The Shoe looks up the Shoe using the number parsed from
// the URL's pathname. If no Shoe is found with the given
// number, then a "Shoe not found" message is displayed.
const tooltip = (
  <Tooltip id="tooltip"><strong>Will be added in a later sprint</strong></Tooltip>
);
const Shoe = (props: any) => {
  const Shoe = ShoeAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!Shoe) {
    return <div>Sorry, but the Shoe was not found</div>
  }
  return (
    <div className='detail'>
            <Row>
            <Col xs={4} md={4}>
            <h3>{Shoe.name} </h3>
            <h4><b>{Shoe.brand} </b> • [Price]</h4>
            <Image src={Shoe.image} rounded responsive /><br/>
            <Button href='/confirmation'bsStyle="primary">Add to Cart</Button>&nbsp;
            <OverlayTrigger placement="top" overlay={tooltip}>
            <Button bsStyle="default" >Add to Wishlist</Button>
            </OverlayTrigger>
            </Col>
            {/* <Col xs={4} md={4}>
            <h4>{Shoe.description}</h4> 
            </Col> */}
            </Row>
        </div>
  )
}

export default Shoe
