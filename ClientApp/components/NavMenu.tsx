import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div>   
            <div className='menu_button'>
                <NavLink to={ '/' } exact activeClassName='active'>
                    <span className='glyphicon glyphicon-home'></span> Home
                </NavLink>
            </div>
            <div className='menu_button'>
                <NavLink to={ '/VrouwSchoenen' } activeClassName='active'>
                    <span className='glyphicon glyphicon-th-list'></span> Women
                </NavLink>
            </div><div className='menu_button'>
                <NavLink to={'/ManSchoenen' } activeClassName='active'>
                    <span className='glyphicon glyphicon-th-list'></span> Men
                </NavLink>
            </div><div className='menu_button'>
                <NavLink to={'/schoenen' } activeClassName='active'>
                    <span className='glyphicon glyphicon-th-list'></span> Alle Schoenen
                </NavLink>
                <div className='menu_button'>
                <NavLink to={ '/wishlist' } activeClassName='active'>
                    <span className='glyphicon glyphicon-th-list'></span> Wishlist
                </NavLink>
            </div>   
            </div>            
        </div>;
    }
}
