import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <h3 className="m-main-color">My Money Counts</h3>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavLink href="/Budget">Create a Budget</NavLink>
              <NavLink href="#">Games</NavLink>
              <NavLink href="#">Lessons</NavLink>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Calculator</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Profile">My Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Account#login">Sign In</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
