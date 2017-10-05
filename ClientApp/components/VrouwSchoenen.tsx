import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as Types from './custom_types'
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {ButtonToolbar, Button, Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
type VrouwSchoenenState = {}

export class VrouwSchoenen extends React.Component<RouteComponentProps<{}>, VrouwSchoenenState> {
    constructor() {
        super();
        this.state = {}
    }

    public render() {

        return <div className='body_content'> <h1> Vrouwen Schoenen</h1>
            <h3>VrouwSchoenen</h3>
            <Row>
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
        </div>
    }


}  
