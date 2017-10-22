import * as Types from './custom_types'
import { Link, NavLink } from 'react-router-dom';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {ButtonToolbar, Button, Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
type PopularSchoenenState = {}

export class Popularf extends React.Component<RouteComponentProps<{}>, PopularSchoenenState> {
    constructor() {
        super();
        this.state = {}
    }

    public render() {

        return <div> <h1> Popular womans wear</h1>
        <Grid>
        <Row>
            <Col xs={4} md={4}>
                <h3>{Types.Shoes15.Name} </h3>
                <a href='/product/1'><img src={Types.Shoes15.Image} width="250" height="250" /></a>
                <h4>€{Types.Shoes15.Price}.00 </h4>
                <li>
                    <NavLink to={'/product/1'} activeClassName='active'>
                        <button> read more!</button>
                    </NavLink>
                </li>
            </Col>
            <Col xs={4} md={4}>
                <h3>{Types.Shoes16.Name} </h3>
                <a href='/product/2'><img src={Types.Shoes16.Image} width="250" height="250" /></a>
                <h4>€{Types.Shoes16.Price}.00 </h4>
                <li>
                    <NavLink to={'/product/2'} activeClassName='active'>
                        <button> Read more!</button>
                    </NavLink>
                </li>
            </Col>
            <Col xs={4} md={4}>
                <h3>{Types.Shoes17.Name} </h3>
                <a href='/product/3'><img src={Types.Shoes17.Image} width="250" height="250" /></a>
                <h4>€{Types.Shoes17.Price}.00 </h4>
                <li>
                    <NavLink to={'/product/3'} activeClassName='active'>
                        <button> Read more!</button>
                    </NavLink>
                </li>
            </Col>
            </Row>
            <Row>
            <Col xs={4} md={4}>
                <h3>{Types.Shoes18.Name} </h3>
                <a href='/product/4'><img src={Types.Shoes18.Image} width="250" height="250" /></a>
                <h4>€{Types.Shoes18.Price}.00 </h4>
                <li>
                    <NavLink to={'/product/4'} activeClassName='active'>
                        <button> Lees meer!</button>
                    </NavLink>
                </li>
                </Col>
                <Col xs={4} md={4}>
                <h3>{Types.Shoes19.Name} </h3>
                <a href='/product/5'><img src={Types.Shoes19.Image} width="250" height="250" /></a>
                <h4>€{Types.Shoes19.Price}.00 </h4>
                <li>
                    <NavLink to={'/product/5'} activeClassName='active'>
                        <button> Lees meer!</button>
                    </NavLink>
                </li>
                </Col>
                <Col xs={4} md={4}>
                <h3>{Types.Shoes20.Name} </h3>
                <a href='/product/6'><img src={Types.Shoes20.Image} width="250" height="250" /></a>
                <h4>€{Types.Shoes20.Price}.00 </h4>
                <li>
                    <NavLink to={'/product/6'} activeClassName='active'>
                        <button> Lees meer!</button>
                    </NavLink>
                </li>
                </Col>
            </Row>
            </Grid>
        </div>
    }


}  
