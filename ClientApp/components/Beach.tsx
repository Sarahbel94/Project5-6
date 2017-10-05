import * as Types from './custom_types'
import { Link, NavLink } from 'react-router-dom';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
type BeachSchoenenState = {}

export class Beach extends React.Component<RouteComponentProps<{}>, BeachSchoenenState> {
    constructor() {
        super();
        this.state = {}
    }

    public render() {

        return <div> <h1> Schoenen voor het strand</h1>
            <h3>{Types.Shoes7.Name} </h3>
            <img src={Types.Shoes7.Image} width="250" height="250" />
            <h4>€{Types.Shoes7.Price}.00 </h4>
            <li>
                <NavLink to={'/detailpagina'} activeClassName='active'>
                    <button> Lees meer!</button>
                </NavLink>
            </li>

            <h3>{Types.Shoes8.Name} </h3>
            <img src={Types.Shoes8.Image} width="250" height="250" />
            <h4>€{Types.Shoes8.Price}.00 </h4>
            <li>
                <NavLink to={'/detailpagina'} activeClassName='active'>
                    <button> Lees meer!</button>
                </NavLink>
            </li>
            <h3>{Types.Shoes9.Name} </h3>
            <img src={Types.Shoes9.Image} width="250" height="250" />
            <h4>€{Types.Shoes9.Price}.00 </h4>
            <li>
                <NavLink to={'/detailpagina'} activeClassName='active'>
                    <button> Lees meer!</button>
                </NavLink>
            </li>
            <h3>{Types.Shoes10.Name} </h3>
            <img src={Types.Shoes10.Image} width="250" height="250" />
            <h4>€{Types.Shoes10.Price}.00 </h4>
            <li>
                <NavLink to={'/detailpagina'} activeClassName='active'>
                    <button> Lees meer!</button>
                </NavLink>
            </li>
        </div>
    }


}  
