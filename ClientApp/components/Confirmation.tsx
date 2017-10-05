import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as Types from './custom_types'
import { Link, NavLink } from 'react-router-dom';
type SchoenenState = {}

var buttonStyle = {
    margin: '10px 10px 10px 0'
  };

export class Confirmation extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className='confirm_placeholder'> <h1>Uw order</h1>
        <h3>{Types.Shoes1.Name} </h3>
            <h4>aantal: 1</h4>
            <img src={Types.Shoes1.Image} width="250" height="250" />
            <h4>€{Types.Shoes1.Price}.00 </h4>
            <a href="/" className="btn btn-info" style={buttonStyle} role="button">Back to Homepage</a>
         </div>
    }
}
