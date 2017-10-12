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
         Popover,
         Media } from 'react-bootstrap';

// The Shoe looks up the Shoe using the number parsed from
// the URL's pathname. If no Shoe is found with the given
// number, then a "Shoe not found" message is displayed.
const tooltip = (
  <Tooltip id="tooltip"><strong>Will be added in a later sprint</strong></Tooltip>
);
const Shopcomponent = (props: any) => {
  const Shoe = ShoeAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!Shoe) {
    return <div>Sorry, but the Shoe was not found</div>
  }
  return (
    <div className='detail'>
            <Row>
            <Col xs={3} md={3}/>
            <Col xs={6} md={6}>
            <Media>
            <Media.Left>
               <img width={150} height={150} src={Shoe.image} alt="Image"/>
             </Media.Left>
             <Media.Body>
               <Media.Heading>{Shoe.name} • €{Shoe.price}</Media.Heading>
               <p>{Shoe.description}</p>
             </Media.Body>
           </Media>
            </Col>
            </Row>
            <Row>
            <Col xs={3} md={3}/>
            <Col xs={6} md={6}>
            <OverlayTrigger placement="top" overlay={tooltip}>
            <Button bsStyle="default" >Checkout</Button>
            </OverlayTrigger>
            </Col>
            </Row> 
        </div>
  )
}

export default Shopcomponent
