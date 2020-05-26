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

  onLogin=(user)=> {
   this.setState({user: user})
  }

  render() {
      return (
        <Fragment>
        <Router>
        <TopBar onLogout={this.onLogout}/>
        <Route exact path="/"> {!localStorage.getItem("token") ? <Redirect to="/login" /> : <Redirect to="/home"/>}</Route>
        <Route exact path="/login" render={props => <Login {...props} onLogin={this.onLogin} />}/>
        <Route path= '/about' component={About}/>
        <Route path= '/home' render={props => <UserHome {...props} user={this.state.user} />}/>
        <Route path= '/leaderboard' component={Leaderboard}/>
        <Route path= '/play' component={Game}/>
        </Router>
        <Footer />
        </Fragment>
 
      )
  }
}


