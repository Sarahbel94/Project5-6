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
    <a href='/detailpagina'><Thumbnail src={Types.Shoes0.Image} alt="Image Load Failed">
      <h3>{Types.Shoes0.Name}</h3>
      <p>€{Types.Shoes0.Price}.00</p>
      <p>
      <Button href='/detailpagina' bsStyle="primary">Details</Button>
      </p>
    </Thumbnail></a>
  </Col>
  <Col xs={4} md={4}>
  <a href='/detailpagina'><Thumbnail src={Types.Shoes1.Image} alt="Image Load Failed">
  <h3>{Types.Shoes1.Name}</h3>
  <p>€{Types.Shoes1.Price}.00</p>
      <p>
      <Button href='/detailpagina' bsStyle="primary">Details</Button>
      </p>
    </Thumbnail></a>
  </Col>
  <Col xs={4} md={4}>
  <a href='/detailpagina'><Thumbnail src={Types.Shoes2.Image} alt="Image Load Failed">
  <h3>{Types.Shoes2.Name}</h3>
  <p>€{Types.Shoes2.Price}.00</p>
      <p>
      <Button href='/detailpagina' bsStyle="primary">Details</Button>
      </p>
    </Thumbnail></a>
  </Col>
  </Row>
  <h1> Populair shoes</h1>
  <Row>
  <Col xs={4} md={4}>
  <a href='/detailpagina'><Thumbnail src={Types.Shoes3.Image} alt="Image Load Failed">
  <h3>{Types.Shoes3.Name}</h3>
  <p>€{Types.Shoes3.Price}.00</p>
      <p>
      <Button href='/detailpagina' bsStyle="primary">Details</Button>
      </p>
    </Thumbnail></a>
  </Col>
  <Col xs={4} md={4}>
  <a href='/detailpagina'><Thumbnail src={Types.Shoes2.Image} alt="Image Load Failed">
  <h3>{Types.Shoes2.Name}</h3>
  <p>€{Types.Shoes2.Price}.00</p>
      <p>
      <Button href='/detailpagina' bsStyle="primary">Details</Button>
      </p>
    </Thumbnail></a>
  </Col>
  <Col xs={4} md={4}>
  <a href='/detailpagina'><Thumbnail src={Types.Shoes1.Image} alt="Image Load Failed">
  <h3>{Types.Shoes1.Name}</h3>
  <p>€{Types.Shoes1.Price}.00</p>
      <p>
      <Button href='/detailpagina' bsStyle="primary">Details</Button>
      </p>
    </Thumbnail></a>
  </Col>
  </Row>
</Grid></div>;
    }
}
