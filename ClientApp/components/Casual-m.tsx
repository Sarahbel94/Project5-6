import * as Types from './custom_types'
import { Link, NavLink } from 'react-router-dom';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {ButtonToolbar, Button, Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
type CasualSchoenenState = {}

export class Casualm extends React.Component<RouteComponentProps<{}>, CasualSchoenenState> {
    constructor() {
        super();
        this.state = {}
    }

    public render() {

        return <div> <h1> Casual </h1>
            <Grid>
            <Row>
            <Col xs={4} md={4}>
            <h3>{Types.Shoes0.Name} </h3>
            <a href='/detailpagina'><img src={Types.Shoes0.Image} width="250" height="250" /></a>
            <h4>€{Types.Shoes0.Price}.00 </h4>
            <li>
                <NavLink to={'/detailpagina'} activeClassName='active'>
                    <button> Lees meer!</button>
                </NavLink>
            </li>
            </Col>
            <Col xs={4} md={4}>
            <h3>{Types.Shoes4.Name} </h3>
            <a href='/detailpagina'><img src={Types.Shoes4.Image} width="250" height="250" /></a>
            <h4>€{Types.Shoes4.Price}.00 </h4>
            <li>
                <NavLink to={'/detailpagina'} activeClassName='active'>
                    <button> Lees meer!</button>
                </NavLink>
            </li>
            </Col>
            <Col xs={4} md={4}>
            <h3>{Types.Shoes5.Name} </h3>
            <a href='/detailpagina'><img src={Types.Shoes5.Image} width="250" height="250" /></a>
            <h4>€{Types.Shoes5.Price}.00 </h4>
            <li>
                <NavLink to={'/detailpagina'} activeClassName='active'>
                    <button> Lees meer!</button>
                </NavLink>
            </li>
            </Col>
            </Row>
            <Row>
            <Col xs={4} md={4}>
            <h3>{Types.Shoes6.Name} </h3>
            <a href='/detailpagina'><img src={Types.Shoes6.Image} width="250" height="250" /></a>
            <h4>€{Types.Shoes6.Price}.00 </h4>
            <li>
                <NavLink to={'/detailpagina'} activeClassName='active'>
                    <button> Lees meer!</button>
                </NavLink>
            </li>
            </Col>
            </Row>
            </Grid>
        </div>
    }


}  
