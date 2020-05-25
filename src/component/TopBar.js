import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from "./LOGO.png"
import {Redirect} from 'react-router-dom'

export class TopBar extends Component {
  handleLogout=()=>{
    this.props.onLogout()
    localStorage.clear()

  }
    render() {
        return (
            <Navbar expand="lg">
            <Navbar.Brand href="/home" className="navbar-left" id="logo"><img id="logo" src={logo} alt='PairUp!'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              {/* <NavDropdown title="Play!" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Easy</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Medium</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Hard</NavDropdown.Item>
                </NavDropdown> */}
                <Nav.Link href="/play">Play!</Nav.Link>
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/leaderboard">Leaderboards</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link onClick={()=>this.handleLogout()}>Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default TopBar
