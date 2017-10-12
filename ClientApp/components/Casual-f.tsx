import * as Types from './custom_types'
import { Link, NavLink } from 'react-router-dom';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {ButtonToolbar, Button, Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
type CasualSchoenenState = {}

export class Casualf extends React.Component<RouteComponentProps<{}>, CasualSchoenenState> {
    constructor() {
        super();
        this.state = {}
    }

    public render() {

        return <div> <h1> Casual wear</h1>
            <Grid>
            <Row>
            <Col xs={4} md={4}>
            <h3>{Types.Shoes19.Name} </h3>
            <a href='/product/5'><img src={Types.Shoes19.Image} width="250" height="250" /></a>
            <h4>€{Types.Shoes19.Price}.00 </h4>
            <li>
                <NavLink to={'/product/5'} activeClassName='active'>
                    <button> Read more!</button>
                </NavLink>
            </li>
            </Col>
            <Col xs={4} md={4}>
            <h3>{Types.Shoes20.Name} </h3>
            <a href='/product/6'><img src={Types.Shoes20.Image} width="250" height="250" /></a>
            <h4>€{Types.Shoes20.Price}.00 </h4>
            <li>
                <NavLink to={'/product/6'} activeClassName='active'>
                    <button> Read more!</button>
                </NavLink>
            </li>
            </Col>
            <Col xs={4} md={4}>
            <h3>{Types.Shoes24.Name} </h3>
            <a href='/product/11'><img src={Types.Shoes24.Image} width="250" height="250" /></a>
            <h4>€{Types.Shoes24.Price}.00 </h4>
            <li>
                <NavLink to={'/product/11'} activeClassName='active'>
                    <button> Read more!</button>
                </NavLink>
            </li>
            </Col>
            </Row>
            <Row>
            <Col xs={4} md={4}>
            <h3>{Types.Shoes25.Name} </h3>
            <a href='/product/12'><img src={Types.Shoes25.Image} width="250" height="250" /></a>
            <h4>€{Types.Shoes25.Price}.00 </h4>
            <li>
                <NavLink to={'/product/12'} activeClassName='active'>
                    <button> Read more!</button>
                </NavLink>
            </li>
            </Col>
            </Row>
            </Grid>
        </div>
    }


}  
