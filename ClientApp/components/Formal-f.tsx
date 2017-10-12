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

        return <div> <h1> Formal</h1>
        <Grid>
        <Row>
            <Col xs={4} md={4}>
                <h3>{Types.Shoes12.Name} </h3>
                <a href='/detailpagina'><img src={Types.Shoes12.Image} width="250" height="250" /></a>
                <h4>€{Types.Shoes12.Price}.00 </h4>
                <li>
                    <NavLink to={'/detailpagina'} activeClassName='active'>
                        <button> Lees meer!</button>
                    </NavLink>
                </li>
            </Col>
            <Col xs={4} md={4}>
                <h3>{Types.Shoes13.Name} </h3>
                <a href='/detailpagina'><img src={Types.Shoes13.Image} width="250" height="250" /></a>
                <h4>€{Types.Shoes13.Price}.00 </h4>
                <li>
                    <NavLink to={'/detailpagina'} activeClassName='active'>
                        <button> Lees meer!</button>
                    </NavLink>
                </li>
            </Col>
            <Col xs={4} md={4}>
                <h3>{Types.Shoes14.Name} </h3>
                <a href='/detailpagina'><img src={Types.Shoes14.Image} width="250" height="250" /></a>
                <h4>€{Types.Shoes14.Price}.00 </h4>
                <li>
                    <NavLink to={'/detailpagina'} activeClassName='active'>
                        <button> Lees meer!</button>
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
                        <button> Lees meer!</button>
                    </NavLink>
                </li>
                </Col>
            </Row>
            </Grid>
        </div>
    }


}  
