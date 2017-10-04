import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {ButtonToolbar, Button, Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div><Grid>
  <Row>
  <Col xs={4} md={4}>
    <Thumbnail src="https://xara.moe/s/yqzif.gif" alt="Image Load Failed">
      <h3>Header Text</h3>
      <p>Subtext</p>
      <p>
      <Button bsStyle="primary">Main Button</Button>&nbsp;
      <Button bsStyle="default">Sub Button</Button>
      </p>
    </Thumbnail>
  </Col>
  <Col xs={4} md={4}>
    <Thumbnail src="https://xara.moe/s/yqzif.gif" alt="Image Load Failed">
      <h3>Header Text</h3>
      <p>Subtext</p>
      <p>
      <Button bsStyle="primary">Main Button</Button>&nbsp;
      <Button bsStyle="default">Sub Button</Button>
      </p>
    </Thumbnail>
  </Col>
  <Col xs={4} md={4}>
    <Thumbnail src="https://xara.moe/s/yqzif.gif" alt="Image Load Failed">
      <h3>Header Text</h3>
      <p>Subtext</p>
      <p>
      <Button bsStyle="primary">Main Button</Button>&nbsp;
      <Button bsStyle="default">Sub Button</Button>
      </p>
    </Thumbnail>
  </Col>
  </Row>
  <Row>
  <Col xs={6} md={6}>
    <Thumbnail src="https://xara.moe/s/yqzif.gif" alt="Image Load Failed">
      <h3>Header Text</h3>
      <p>Subtext</p>
      <p>
      <Button bsStyle="primary">Main Button</Button>&nbsp;
      <Button bsStyle="default">Sub Button</Button>
      </p>
    </Thumbnail>
  </Col>
  <Col xs={6} md={6}>
    <Thumbnail src="https://xara.moe/s/yqzif.gif" alt="Image Load Failed">
      <h3>Header Text</h3>
      <p>Subtext</p>
      <p>
      <Button bsStyle="primary">Main Button</Button>&nbsp;
      <Button bsStyle="default">Sub Button</Button>
      </p>
    </Thumbnail>
  </Col>
  </Row>
  <Row>
  <Col xs={12} md={12}>
    <Thumbnail src="https://xara.moe/s/yqzif.gif" alt="Image Load Failed">
      <h3>Header Text</h3>
      <p>Subtext</p>
      <p>
      <Button bsStyle="primary">Main Button</Button>&nbsp;
      <Button bsStyle="default">Sub Button</Button>
      </p>
    </Thumbnail>
  </Col>

  </Row>
</Grid></div>;
    }
}
