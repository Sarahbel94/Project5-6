import * as React from 'react';
import { RouteComponentProps } from 'react-router';

var buttonStyle = {
    margin: '10px 10px 10px 0'
  };

export class Confirmation extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div> <h1>Shoes boi</h1>
        <a href="/" className="btn btn-info" style={buttonStyle} role="button">Back to Homepage</a>
         </div>
    }
}
