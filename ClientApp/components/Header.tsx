import * as React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, Tooltip, MenuItem, DropdownButton, Button, OverlayTrigger} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Link, NavLink } from 'react-router-dom';

const tooltip = (
  <Tooltip id="tooltip"><strong>Will be added in a later sprint</strong></Tooltip>
);
export class Header extends React.Component<{}, {}> {
    public render() {
        return   <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
      <a href="#"><img src="https://xara.moe/s/ibnjg.png" width="40" height="40"/>Pattas</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
      <NavDropdown eventKey={1} title="Men" id="dropdown-categories">
      <a href='/Popular-m'><MenuItem eventKey={1.1}><NavLink to={ '/Popular-m' } activeClassName='active'>
      <div className='menu_link'>Popular</div> 
                </NavLink></MenuItem></a>
                <a href='/Casual-m'><MenuItem eventKey={1.2}><NavLink to={ '/Casual-m' } activeClassName='active'>
                <div className='menu_link'>Casual</div> 
                </NavLink></MenuItem></a>
                <a href='/Formal-m'><MenuItem eventKey={1.3}><NavLink to={ '/Formal-m' } activeClassName='active'>
                <div className='menu_link'>Formal</div> 
                </NavLink></MenuItem></a>
                <a href='/Beach-m'><MenuItem eventKey={1.3}><NavLink to={ '/Beach-m' } activeClassName='active'>
                <div className='menu_link'>Beach wear</div> 
                </NavLink></MenuItem></a>
          {/* <MenuItem divider />
          <MenuItem eventKey={1.4}>Placeholder</MenuItem> */}
        </NavDropdown>
        <NavDropdown eventKey={2} title="Women" id="dropdown-categories">
        <a href='/Popular-f'><MenuItem eventKey={2.1}><NavLink to={ '/Popular-f' } activeClassName='active'>
        <div className='menu_link'>Popular</div> 
                </NavLink></MenuItem></a>
                <a href='/Casual-f'><MenuItem eventKey={2.2}><NavLink to={ '/Casual-f' } activeClassName='active'>
                <div className='menu_link'>Casual</div> 
                </NavLink></MenuItem></a>
          <a href='/Formal-f'><MenuItem eventKey={2.3}><NavLink to={ '/Formal-f' } activeClassName='active'>
          <div className='menu_link'>Formal</div>
                </NavLink></MenuItem></a>
          {/* <MenuItem divider />
          <MenuItem eventKey={2.4}>Separated link</MenuItem> */}
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavDropdown title="Username56" id="dropdown-settings">
          <MenuItem eventKey={4.1}>
          <NavLink to={ '/wishlist' } activeClassName='active'>
          <span className='glyphicon glyphicon-th-list'></span>   Wishlist 
                </NavLink>
                </MenuItem>
          <MenuItem eventKey={4.2}>Account Settings</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={4.3}>Log Out</MenuItem>
         
        </NavDropdown>
        <OverlayTrigger placement="bottom" overlay={tooltip}>
        <Button bsStyle="default" >Shopping Cart</Button>
        </OverlayTrigger>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;
    }
}