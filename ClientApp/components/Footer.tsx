import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class Footer extends React.Component<{}, {}> {
    public render() {
        return <div className='footer'>
                <div className='inner_footer'>
                    Project 4/5<br/>
                    Group: Pattas<br/>
                    Repo: <a href='https://github.com/Sarahbel94/Project5-6'> Github</a>
                </div>
            </div>;
    }
} 