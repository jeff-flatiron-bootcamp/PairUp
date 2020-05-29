import React, { Component, Fragment } from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import logo from "./LOGO.png"

export class TopBar extends Component {
  handleLogout=()=>{
    this.props.onLogout()
    this.props.history.push('/login')
  }
    render() {
        return (
          <Fragment>
            <Navbar expand="lg">
            <Navbar.Brand href="/home" className="navbar-left"><img id="logo" src={logo} alt='PairUp!'/></Navbar.Brand>
              <Nav className="mr-auto">
               <Navbar.Text> <Link to="/play">Play!</Link></Navbar.Text> 
               <Navbar.Text> <Link to="/home">Home</Link></Navbar.Text>
               <Navbar.Text> <Link to="/leaderboard">Leaderboards</Link></Navbar.Text>
               <Navbar.Text> <Link to="/about">About</Link></Navbar.Text>
               {this.props.user? <Navbar.Text onClick={()=>this.handleLogout()}>Logout</Navbar.Text>: null}
              </Nav>
          </Navbar>
          </Fragment>
        )
    }
}

export default TopBar