import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import logo from "./LOGO.png"

export class TopBar extends Component {
  handleLogout=()=>{
    this.props.onLogout()
    localStorage.clear()
  }
    render() {
        return (
            <Navbar expand="lg">
            <Navbar.Brand href="/home" className="navbar-left"><img id="logo" src={logo} alt='PairUp!'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Nav className="mr-auto">
              {/* <NavDropdown title="Play!" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Easy</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Medium</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Hard</NavDropdown.Item>
                </NavDropdown> */}
               <Navbar.Text> <Link to="/play">Play!</Link></Navbar.Text> 
               <Navbar.Text> <Link to="/home">Home</Link></Navbar.Text>
               <Navbar.Text> <Link to="/leaderboard">Leaderboards</Link></Navbar.Text>
               <Navbar.Text> <Link to="/about">About</Link></Navbar.Text>
               <Navbar.Text onClick={()=>this.handleLogout()}>Logout</Navbar.Text>
              </Nav>
          </Navbar>
        )
    }
}

export default TopBar