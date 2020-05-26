import React, {PureComponent, Fragment } from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopBar from './component/TopBar'
import Login from './component/Login'
import Footer from './component/Footer'
import Leaderboard from './component/Leaderboard';
import UserHome from './component/UserHome'
import About from './component/About'
import Game from './component/Game'

export default class App extends PureComponent {

    state={
        user:''
    }

  onLogout=()=> {
    window.location.reload()
  }

  setUser=(user)=> {
   this.setState({user: user})
  }

  render() {
      return (
        <Fragment>
        <Router>
        <TopBar onLogout={this.onLogout}/>
        <Route exact path="/"> {this.state.user ? <Redirect to="/login" /> : <Redirect to="/home"/>}</Route>
        <Route exact path="/login" render={props => <Login {...props} onLogin={this.setUser} />}/>
        <Route path= '/about' render={props => <About {...props} setUser={this.setUser} />}/>
        <Route path= '/home' render={props => <UserHome {...props} setUser={this.setUser} user={this.state.user} />}/>
        <Route path= '/leaderboard' render={props => <Leaderboard {...props} setUser={this.setUser} />}/>
        <Route path= '/play' render={props => <Game {...props} setUser={this.setUser} />}/>
        </Router>
        <Footer />
        </Fragment>
      )
  }
}


