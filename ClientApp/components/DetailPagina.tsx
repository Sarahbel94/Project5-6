import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as Types from './custom_types'
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {ButtonToolbar, Button, Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
// import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
type DetailPaginaState = {}



export class DetailPagina extends React.Component<RouteComponentProps<{}>, DetailPaginaState> {
    constructor() {
        super();
        this.state = {}
    }
    public render() {
        // const { query } = this.props.location;
        // const {product } = query;
        const queryString = require('query-string');
        return <div className='detail'>
            {/* console.log(location.search); */}
            {/* {product} */}
            <Row>
            <Col xs={4} md={4}>
            <h3>{Types.Shoes1.Name} </h3>
            <img src={Types.Shoes1.Image} width="250" height="250" />
            <h4>{Types.Shoes1.Brand} </h4>
            <div>{Types.Shoes1.Description} </div>
            </Col>
            <Col xs={4} md={4}>
            <h4>€{Types.Shoes1.Price}.00 </h4><br/>
            Kleur:
                <select name="cars">
                    <option value="volvo">Zwart</option>
                    <option value="saab">Wit</option>
                    <option value="fiat">Blauw</option>
                    <option value="audi">Rood</option>
                </select><br/>
            Maat:
                <select name="cars">
                    <option value="volvo">38</option>
                    <option value="saab">39</option>
                    <option value="fiat">40</option>
                    <option value="audi">41</option>
                </select><br/><br/>
                <NavLink to={'#'} activeClassName='active'>
                    <button>☆</button>
                </NavLink><br/><br/>
                <NavLink to={'/confirmation'} activeClassName='active'>
                    <button> Bestel NU!</button>
                </NavLink>
            </Col>
            </Row>
        </div>
    }


}  
