import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as Types from './custom_types'
import { Link, NavLink } from 'react-router-dom';
type DetailPaginaState = {}

export class Hakke extends React.Component<RouteComponentProps<{}>, DetailPaginaState> {
    constructor() {
        super();
        this.state = {}
    }

    public render() {

        return <div> 
          <h3>{Types.Shoes1.Name} </h3>
            <img src={Types.Shoes1.Image} width="250" height="250" />
            <h4>€{Types.Shoes1.Price}.00 </h4>
            <li>
                <NavLink to={'/detailpagina'} activeClassName='active'>
                    <button> Lees meer!</button>
                </NavLink>
            </li>

         
        </div>

    }


}  
