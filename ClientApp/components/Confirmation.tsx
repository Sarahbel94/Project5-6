import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as Types from './custom_types'
import { Link, NavLink } from 'react-router-dom';
import {Image,
        Grid,
        Row,
        Col,
        Thumbnail,
        Button,
    Media} from 'react-bootstrap';
type SchoenenState = {}

var buttonStyle = {
    margin: '10px 10px 10px 0'
  };

export class Confirmation extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <Row>
        <Col xs={2} md={2}></Col>
        <Col xs={2} md={2}>
        <Media>
     <Media.Left>
        <img width={128} height={128} src={Types.Shoes1.Image} alt="Image"/>
      </Media.Left>
      <Media.Body>
        <Media.Heading><b>{Types.Shoes1.Name}</b></Media.Heading>
        <h4>aantal: 1</h4>
        <h4>€{Types.Shoes1.Price}.00 </h4>
      </Media.Body>
      <br/>
      <br/>
      <Button href="/"bsStyle="primary" bsSize="large">Back to Homepage</Button>
    </Media>
    </Col>
    </Row>
    }
}
