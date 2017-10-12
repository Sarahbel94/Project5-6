import * as Types from './custom_types'
import { Link, NavLink } from 'react-router-dom';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {ButtonToolbar, Button, Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
type PopularSchoenenState = {}

export class Popularm extends React.Component<RouteComponentProps<{}>, PopularSchoenenState> {
    constructor() {
        super();
        this.state = {}
    }

    public render() {

        return <div> <h1> Popular mens wear</h1>
        <Grid>
        <Row>
            <Col xs={4} md={4}>
                <h3>{Types.Shoes12.Name} </h3>
                <a href='/detailpagina'><img src={Types.Shoes12.Image} width="250" height="250" /></a>
                <h4>€{Types.Shoes12.Price}.00 </h4>
                <li>
                    <NavLink to={'/detailpagina'} activeClassName='active'>
                        <button> Read more!</button>
                    </NavLink>
                </li>
            </Col>
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
                <h3>{Types.Shoes5.Name} </h3>
                <a href='/detailpagina'><img src={Types.Shoes5.Image} width="250" height="250" /></a>
                <h4>€{Types.Shoes5.Price}.00 </h4>
                <li>
                    <NavLink to={'/detailpagina'} activeClassName='active'>
                        <button> Read more!</button>
                    </NavLink>
                </li>
            </Col>
            </Row>
            <Row>
            <Col xs={4} md={4}>
                <h3>{Types.Shoes11.Name} </h3>
                <a href='/detailpagina'><img src={Types.Shoes11.Image} width="250" height="250" /></a>
                <h4>€{Types.Shoes11.Price}.00 </h4>
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
