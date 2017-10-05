import * as Types from './custom_types'
import { Link, NavLink } from 'react-router-dom';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
type CasualSchoenenState = {}

export class Casual extends React.Component<RouteComponentProps<{}>, CasualSchoenenState> {
    constructor() {
        super();
        this.state = {}
    }

    public render() {

        return <div> <h1> Casual </h1>
            <h3>{Types.Shoes0.Name} </h3>
            <img src={Types.Shoes0.Image} width="250" height="250" />
            <h4>€{Types.Shoes0.Price}.00 </h4>
            <li>
                <NavLink to={'/detailpagina'} activeClassName='active'>
                    <button> Lees meer!</button>
                </NavLink>
            </li>

            <h3>{Types.Shoes4.Name} </h3>
            <img src={Types.Shoes4.Image} width="250" height="250" />
            <h4>€{Types.Shoes4.Price}.00 </h4>
            <li>
                <NavLink to={'/detailpagina'} activeClassName='active'>
                    <button> Lees meer!</button>
                </NavLink>
            </li>

            <h3>{Types.Shoes5.Name} </h3>
            <img src={Types.Shoes5.Image} width="250" height="250" />
            <h4>€{Types.Shoes5.Price}.00 </h4>
            <li>
                <NavLink to={'/detailpagina'} activeClassName='active'>
                    <button> Lees meer!</button>
                </NavLink>
            </li>
            <h3>{Types.Shoes6.Name} </h3>
            <img src={Types.Shoes6.Image} width="250" height="250" />
            <h4>€{Types.Shoes6.Price}.00 </h4>
            <li>
                <NavLink to={'/detailpagina'} activeClassName='active'>
                    <button> Lees meer!</button>
                </NavLink>
            </li>


        </div>
    }


}  
