import * as React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

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
        <NavItem eventKey={1} href="/">Men</NavItem>
        <NavItem eventKey={2} href="/">Women</NavItem>
        <NavDropdown eventKey={3} title="Categories" id="dropdown-categories">
          <MenuItem eventKey={3.1}>Sport</MenuItem>
          <MenuItem eventKey={3.2}>Outdoor</MenuItem>
          <MenuItem eventKey={3.3}>Casual</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavDropdown title="Username56" id="dropdown-settings">
          <MenuItem eventKey={4.1}>My Wishlist</MenuItem>
          <MenuItem eventKey={4.2}>Account Settings</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={4.3}>Log Out</MenuItem>
        </NavDropdown>
        <Button href="/" bsStyle="default" >Shopping Cart</Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;
    }
}