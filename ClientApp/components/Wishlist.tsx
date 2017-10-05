import * as Types from './custom_types'
import { Link, NavLink } from 'react-router-dom';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {ButtonToolbar, Button, Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
type WishlistState = {}
export class Wishlist extends React.Component<RouteComponentProps<{}>, WishlistState> {
    constructor() {
        super();
        this.state = {}
    }
    public render() {
        
                return <div > 
            console.log(location.search);
            {/* {product} */}
            <h3>{Types.Shoes1.Name} </h3>
            <img src={Types.Shoes1.Image} width="250" height="250" />
            <h4>€{Types.Shoes1.Price}.00 </h4>
            <h4>{Types.Shoes1.Brand} </h4>
            <div>{Types.Shoes1.Description} </div>
            <h3>Beschikbare Kleuren</h3>
            <div>{Types.Shoes1.Color} </div>
            <h3>Beschikbare Maten</h3>
            <div>{Types.Shoes1.Size} </div>

            <NavLink to={'/confirmation'} activeClassName='active'>
                <Button bsStyle="primary" > Bestel NU!</Button>
            </NavLink>
            <NavLink to={'/wishlist'} activeClassName='active'>
                <Button bsStyle="primary" >Verwijder</Button>
            </NavLink>
        
                </div>
            }
        
        
        }  
        