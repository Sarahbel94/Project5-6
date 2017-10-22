import * as Types from './custom_types'
import { Link, NavLink } from 'react-router-dom';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {ButtonToolbar, Button, Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
type FormalSchoenenState = {}

export class Formalf extends React.Component<RouteComponentProps<{}>, FormalSchoenenState> {
    constructor() {
        super();
        this.state = {}
    }

    public render() {

        return <div> <h1> Formal wear</h1>
        <Grid>
        <Row>
            <Col xs={4} md={4}>
                <h3>{Types.Shoes21.Name} </h3>
                <a href='/product/7'><img src={Types.Shoes21.Image} width="250" height="250" /></a>
                <h4>€{Types.Shoes21.Price}.00 </h4>
                <li>
                    <NavLink to={'/product/7'} activeClassName='active'>
                        <button> Read more!</button>
                    </NavLink>
                </li>
            </Col>
            <Col xs={4} md={4}>
                <h3>{Types.Shoes22.Name} </h3>
                <a href='/product/9'><img src={Types.Shoes22.Image} width="250" height="250" /></a>
                <h4>€{Types.Shoes22.Price}.00 </h4>
                <li>
                    <NavLink to={'/product/9'} activeClassName='active'>
                        <button> Read more!</button>
                    </NavLink>
                </li>
            </Col>
            <Col xs={4} md={4}>
                <h3>{Types.Shoes23.Name} </h3>
                <a href='/product/10'><img src={Types.Shoes23.Image} width="250" height="250" /></a>
                <h4>€{Types.Shoes23.Price}.00 </h4>
                <li>
                    <NavLink to={'/product/10'} activeClassName='active'>
                        <button> Read more!</button>
                    </NavLink>
                </li>
            </Col>
            </Row>
            </Grid>
        </div>
    }


}  
