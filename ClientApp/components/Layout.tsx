import * as React from 'react';
// import { NavMenu } from './NavMenu';
import { Footer } from './Footer';
import { Header } from './Header';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className='main_container'>
            <div className='header_container'>
                <div className='header_top'>
                    <Header />
                </div>
                {/* <div className='header_bottom'>
                    <NavMenu />
                </div> */}
            </div>
            <div className='body_containter'>
                { this.props.children }
            </div>
            <div className='footer_container'>
                <Footer />
            </div>     
        </div>;
    }
}
