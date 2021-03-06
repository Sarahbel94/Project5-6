import * as Types from './custom_types'
import { Link, NavLink } from 'react-router-dom';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {ButtonToolbar, Button, Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
type BeachSchoenenState = {}

export class Beachm extends React.Component<RouteComponentProps<{}>, BeachSchoenenState> {
    constructor() {
        super();
        this.state = {}
    }

    public render() {

        return <div> <h1> Beach wear</h1>
        <Grid>
        <Row>
            <Col xs={4} md={4}>
            <h3>{Types.Shoes7.Name} </h3>
            <a href='/detailpagina'><img src={Types.Shoes7.Image} width="250" height="250" /></a>
            <h4>€{Types.Shoes7.Price}.00 </h4>
            <li>
                <NavLink to={'/detailpagina'} activeClassName='active'>
                    <button> Read more!</button>
                </NavLink>
            </li>
            </Col>
            <Col xs={4} md={4}>
            <h3>{Types.Shoes8.Name} </h3>
            <a href='/detailpagina'><img src={Types.Shoes8.Image} width="250" height="250" /></a>
            <h4>€{Types.Shoes8.Price}.00 </h4>
            <li>
                <NavLink to={'/detailpagina'} activeClassName='active'>
                    <button> Read more!</button>
                </NavLink>
            </li>
            </Col>
            <Col xs={4} md={4}>
            <h3>{Types.Shoes9.Name} </h3>
            <a href='/detailpagina'><img src={Types.Shoes9.Image} width="250" height="250" /></a>
            <h4>€{Types.Shoes9.Price}.00 </h4>
            <li>
                <NavLink to={'/detailpagina'} activeClassName='active'>
                    <button> Read more!</button>
                </NavLink>
            </li>
            </Col>
            </Row>
            <Row>
            <Col xs={4} md={4}>
            <h3>{Types.Shoes10.Name} </h3>
            <a href='/detailpagina'><img src={Types.Shoes10.Image} width="250" height="250" /></a>
            <h4>€{Types.Shoes10.Price}.00 </h4>
            <li>
                <NavLink to={'/detailpagina'} activeClassName='active'>
                    <button> Read more!</button>
                </NavLink>
            </li>
            </Col>
            </Row>
            </Grid>
        </div>
    }


}  
