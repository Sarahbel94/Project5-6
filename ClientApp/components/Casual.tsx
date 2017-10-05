import * as Types from './custom_types'
import { Link, NavLink } from 'react-router-dom';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
type ManSchoenenState = {}

export class ManSchoenen extends React.Component<RouteComponentProps<{}>, ManSchoenenState> {
    constructor() {
        super();
        this.state = {}
    }

    public render() {

        return <div> <h1> Vrouwen Schoenen</h1>
            <h3>{Types.Shoes0.Name} </h3>
            <img src={Types.Shoes0.Image} width="250" height="250" />
            <h4>€{Types.Shoes0.Price}.00 </h4>
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
