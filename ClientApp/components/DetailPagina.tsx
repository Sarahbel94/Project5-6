import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as Types from './custom_types'
import { Link, NavLink } from 'react-router-dom';
type DetailPaginaState = {}

export class DetailPagina extends React.Component<RouteComponentProps<{}>, DetailPaginaState> {
    constructor() {
        super();
        this.state = {}
    }

    public render() {

        return <div> <h1> Vrouwen Schoenen</h1>
            <h3>{Types.Shoes0.Name} </h3>
            <img src={Types.Shoes0.Image} width="250" height="250" />
            <h4>€{Types.Shoes0.Price}.00 </h4>
            <h4>{Types.Shoes0.Brand} </h4>
            <div>{Types.Shoes0.Description} </div>
            <h3>Beschikbare Kleuren</h3>
            <div>{Types.Shoes0.Color} </div>
            <h3>Beschikbare Maten</h3>
            <div>{Types.Shoes0.Size} </div>

            <NavLink to={'/confirmation'} activeClassName='active'>
                <button> Bestel NU!</button>
            </NavLink>








        </div>
    }


}  
