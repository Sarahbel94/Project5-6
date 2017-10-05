import * as React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Link, NavLink } from 'react-router-dom';

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
          <MenuItem eventKey={1.1}><NavLink to={ '/Casual' } activeClassName='active'>
          Casual 
                </NavLink></MenuItem>
          <MenuItem eventKey={1.2}><NavLink to={ '/Beach' } activeClassName='active'>
          Beach 
                </NavLink></MenuItem>
          <MenuItem eventKey={1.3}><NavLink to={ '/Formal' } activeClassName='active'>
          Formal 
                </NavLink></MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={1.4}>Placeholder</MenuItem>
        </NavDropdown>
        <NavDropdown eventKey={2} title="Women" id="dropdown-categories">
          <MenuItem eventKey={2.1}><NavLink to={ '/Casual' } activeClassName='active'>
          Casual 
                </NavLink></MenuItem>
          <MenuItem eventKey={2.2}><NavLink to={ '/Beach' } activeClassName='active'>
          Beach 
                </NavLink></MenuItem>
          <MenuItem eventKey={2.3}><NavLink to={ '/Formal' } activeClassName='active'>
          Formal 
                </NavLink></MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={2.4}>Separated link</MenuItem>
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
        <Button href="/Confirmation" bsStyle="default" >Shopping Cart</Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;
    }
}