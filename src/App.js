import React, {Component, Fragment } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Jumbotron } from 'react-bootstrap'

import './App.css';
import TopBar from './component/TopBar'
import Login from './component/Login'
import Footer from './component/Footer'
import Leaderboard from './component/Leaderboard';
import UserHome from './component/UserHome'
import About from './component/About'
import Game from './component/Game'



export default class App extends Component {

  constructor(props) {
      super(props)
  }

  render() {
      return (
        <Fragment>
        <TopBar />
        <Router>
        <Route path= '/about' component={About}/>
        <Route path= '/login' component={Login}/>
        <Route path= '/home' component={UserHome}/>
        <Route path= '/leaderboard' component={Leaderboard}/>
        <Route path= '/play' component={Game}/>
        </Router>
        <Footer />
        </Fragment>
 
      )
  }
}


