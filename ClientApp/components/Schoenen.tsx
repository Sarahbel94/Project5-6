import * as React from 'react';
import { RouteComponentProps } from 'react-router';

type SchoenenState = {}

export class Schoenen extends React.Component<RouteComponentProps<{}>, SchoenenState> {
    constructor() {
        super();
        this.state = {};
    }

    public render() {
       return <div> Schoenen Page </div>
    }

    
}
