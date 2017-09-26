import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={ '/' }>SepatuS</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={ '/' } exact activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/counter' } activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Women
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/fetchdata' } activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Men
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/schoenen' } activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Schoenen
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/confirmation' } activeClassName='active'>
                                <span className='glyphicon glyphicon-ok'></span> Confirmation
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
