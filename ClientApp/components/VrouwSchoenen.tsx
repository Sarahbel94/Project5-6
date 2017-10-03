import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as Types from './custom_types'
import { Link, NavLink } from 'react-router-dom';
type VrouwSchoenenState = {}

export class VrouwSchoenen extends React.Component<RouteComponentProps<{}>, VrouwSchoenenState> {
    constructor() {
        super();
        this.state = {}
    }
    // Hoge en enkellaarzen
    // Platte schoenen
    // Schoenen met hakken
    // Sandalen
    // Sneakers
    public render() {

        return <div className='body_content'> <h1> Vrouwen Schoenen</h1>
            <li> 
                <NavLink to={'/Hakke'} >
               
                 Schoenen met hakken!
                 
                </NavLink>
            </li>
        
            <li>
                <NavLink to={'/Hakke'} >
               
                    Hoge en enkellaarzen
                </NavLink>
            </li>

            <li>
                <NavLink to={'/Hakke'} activeClassName='active'>
               
                    Platte schoenen
                </NavLink>
            </li>
            <li>
                <NavLink to={'/Hakke'} activeClassName='active'>
               
                    Sandalen
                </NavLink>
            </li>

            <li>
                <NavLink to={'/Hakke'} activeClassName='active'>
               
                    Sneakers
                </NavLink>
            </li>


            <h3>{Types.Shoes1.Name} </h3>
            <img src={Types.Shoes1.Image} width="250" height="250" />
            <h4>€{Types.Shoes1.Price}.00 </h4>
            <li>
                <NavLink to={'/detailpagina'} activeClassName='active'>
                    <button> Lees meer!</button>
                </NavLink>
            </li>

            <h3>{Types.Shoes2.Name} </h3>
            <img src={Types.Shoes2.Image} width="250" height="250" />
            <h4>€{Types.Shoes2.Price}.00 </h4>
            <li>
                <NavLink to={'/detailpagina'} activeClassName='active'>
                    <button> Lees meer!</button>
                </NavLink>
            </li>
           

        </div>
    }


}  
