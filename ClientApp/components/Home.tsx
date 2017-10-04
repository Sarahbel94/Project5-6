import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as Types from './custom_types'
import { Link, NavLink } from 'react-router-dom';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <img src="https://w-dog.net/wallpapers/15/2/446464514179282/heels-shoes-purchase-models.jpg" width="500" />
            <h1>Welcome!</h1>
            <h2>Here you will find the right shoes for the right occasion! :)</h2>
           
        </div>;
    }
}
