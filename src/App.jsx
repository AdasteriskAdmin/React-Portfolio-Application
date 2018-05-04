import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

import Home from './pages/Home';
import Account from './pages/Account';
import MatchError from './pages/MatchError';
import Projects from './pages/Projects';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class App extends Component {
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
      <Router>
        <div>
          <Navbar color="light" light expand="md">
            <div className="container">
              <NavbarBrand href="/">Kaiserr</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/projects/">Projects</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Contact
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem><a href="https://www.LessThan3.ca">LessThan3.ca</a></DropdownItem>
                      <DropdownItem><a href="mailto:jeremy@lessthan3.ca">jeremy@lessthan3.ca</a></DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Logout
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </div>
          </Navbar>
          <div className="container page-body">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/account" component={Account} />
              <Route path="/projects" component={Projects} />
              <Route path='/404' component={MatchError} />
              <Redirect from='*' to='/404' />
            </Switch>
          </div>
          <div className="container page-footer">
            FOOTER 

          </div>
        </div>
        
      </Router>
    );
  }
}

export default App;
