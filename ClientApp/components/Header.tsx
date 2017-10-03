import * as React from 'react';

export class Header extends React.Component<{}, {}> {
    public render() {
        return <div>
            <div className='logo'></div>
            <div className='header_menu_container'>
                <div className='user_menu'>
                    <a href='/'>>registreer</a>
                    <a href='/'>>Login</a>
                </div>
                <div className='shopping_cart'>
                    <li>Winkelwagen leeg</li>
                    <li><a href='/'>zie winkelwage</a></li>
                </div>
            </div>
        </div>;
    }
}