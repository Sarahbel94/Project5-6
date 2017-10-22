import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {ButtonToolbar, Button, Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import * as Types from './custom_types'

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div><Grid>
          <h1> new arrivals</h1>
  <Row>
  <Col xs={4} md={4}>
    <a href='/product/11'><Thumbnail src={Types.Shoes24.Image} alt="Image Load Failed">
      <h3>{Types.Shoes24.Name}</h3>
      <p>€{Types.Shoes24.Price}.00</p>
      <p>
      <Button href='/product/11' bsStyle="primary">Details</Button>
      </p>
    </Thumbnail></a>
  </Col>
  <Col xs={4} md={4}>
  <a href='/product/5'><Thumbnail src={Types.Shoes19.Image} alt="Image Load Failed">
  <h3>{Types.Shoes19.Name}</h3>
  <p>€{Types.Shoes19.Price}.00</p>
      <p>
      <Button href='/product/5' bsStyle="primary">Details</Button>
      </p>
    </Thumbnail></a>
  </Col>
  <Col xs={4} md={4}>
  <a href='/product/1'><Thumbnail src={Types.Shoes15.Image} alt="Image Load Failed">
  <h3>{Types.Shoes15.Name}</h3>
  <p>€{Types.Shoes15.Price}.00</p>
      <p>
      <Button href='/product/1' bsStyle="primary">Details</Button>
      </p>
    </Thumbnail></a>
  </Col>
  </Row>
  <h1>Most wanted</h1>
  <Row>
  <Col xs={4} md={4}>
  <a href='/product/10'><Thumbnail src={Types.Shoes23.Image} alt="Image Load Failed">
  <h3>{Types.Shoes23.Name}</h3>
  <p>€{Types.Shoes23.Price}.00</p>
      <p>
      <Button href='/product/10' bsStyle="primary">Details</Button>
      </p>
    </Thumbnail></a>
  </Col>
  <Col xs={4} md={4}>
  <a href='/product/1'><Thumbnail src={Types.Shoes15.Image} alt="Image Load Failed">
  <h3>{Types.Shoes15.Name}</h3>
  <p>€{Types.Shoes15.Price}.00</p>
      <p>
      <Button href='/product/1' bsStyle="primary">Details</Button>
      </p>
    </Thumbnail></a>
  </Col>
  <Col xs={4} md={4}>
  <a href='/product/2'><Thumbnail src={Types.Shoes16.Image} alt="Image Load Failed">
  <h3>{Types.Shoes16.Name}</h3>
  <p>€{Types.Shoes16.Price}.00</p>
      <p>
      <Button href='/product/2' bsStyle="primary">Details</Button>
      </p>
    </Thumbnail></a>
  </Col>
  </Row>
</Grid></div>;
    }
}
