import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as Types from './custom_types'
import { Link, NavLink } from 'react-router-dom';
type SchoenenState = {}

export class Schoenen extends React.Component<RouteComponentProps<{}>, SchoenenState> {
    constructor() {
        super();
        this.state = {}
    }

    public render() {

        return <div> <h1> Alle Schoenen</h1>
            <h3>{Types.Shoes0.Name} </h3>
            <img src={Types.Shoes0.Image} width="250" height="250" />
            <h4>€{Types.Shoes0.Price}.00 </h4>
            <li>
                <NavLink to={'/detailpagina'} activeClassName='active'>
                    <button> Lees meer!</button>
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

            <h3>{Types.Shoes3.Name} </h3>
            <img src={Types.Shoes3.Image} width="250" height="250" />
            <h4>€{Types.Shoes3.Price}.00 </h4>
            <li>
                <NavLink to={'/detailpagina'} activeClassName='active'>
                    <button> Lees meer!</button>
                </NavLink>
            </li>


        </div>
    }


}  
