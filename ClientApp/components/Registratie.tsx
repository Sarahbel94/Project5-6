import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as Types from './custom_types'
import { Link, NavLink } from 'react-router-dom';

type RegistratieState = {}

export class Registratie extends React.Component<RouteComponentProps<{}>, RegistratieState> {
    constructor() {
        super();
        this.state = {}
    }


    render(){
        return <div> 
                    {/* <h1>Join ons! Registreer en geniet van de voordelen!</h1>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdWzNnrd2hnWBZm9tuWQFaAdjJEi0mqUXQbRnSUVuSSqsjwSt6AA" alt="200 px"/> */}
                    <img src="http://lutheranmeded.com/wp-content/uploads/2014/06/website-under-construction-300x150.jpg" alt="500px"/>

    </div>

    }
}

