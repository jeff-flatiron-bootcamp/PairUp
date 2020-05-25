import React, {Component, Fragment } from 'react';
import './App.css';
import {tiles} from './data.js'
import Cell from './Cell.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './component/TopBar'
import Login from './component/Login'
import Footer from './component/Footer'
import { Container, Jumbotron } from 'react-bootstrap'
import Leaderboard from './component/Leaderboard';
import UserHome from './component/UserHome'
import About from './component/About'
import {BrowserRouter as Router, Route} from "react-router-dom"



export default class App extends Component {

  constructor(props) {
      super(props)
    
      this.state = {
        board: tiles,
        choice: null,
        matched: [],
        score: 0
      }
  }

  setChoice = (cell) =>{

    if (!this.state.matched.includes(cell)){

    this.setState ({     
      board:this.state.board.map(card => {
      if (card === cell) {
        card.flipped = true
      }
      return card
      })
    })


    let pair = this.state.choice
    if (!pair) {
      this.setState({choice:cell })}
    else {
      setTimeout(() => {
      if ((pair.word === cell.word) && (pair.id !== cell.id)){
        console.log(`They match!`)
        this.setState({score: this.state.score + 1, 
          matched:[...this.state.matched, pair, cell]})
          this.isAWin()
      }
      else {
        console.log(`They don't match!`)
        this.setState ({ 
          board:this.state.board.map(card => {
            if ((card === cell) || (card === pair)) {
              card.flipped = false
            }
            return card
          })
        })  
      }}, 750)

      setTimeout(() => {this.setState({choice:null})}, 200)
    }  }

    else { console.log(`This card has already been matched!`)}
  }

  isAWin = () => {
    return ((this.state.score * 2) === this.state.board.length)? (alert("You win!")) : console.log(`${this.state.board.length} != ${this.state.score}`)
  }

  generateRows = ()=> {
    return this.state.board.map(val => <Cell key={val.id} cellContent={val} onSetChoice={this.setChoice}/>)
  }


  chooseDifficulty = () => {
    return (
      <div>
        Choose the Game Difficulty
        <select onChange={this.prepGameBoard}>
          <option value="4">Easy</option>
          <option value="8">Medium</option>
          <option value="12">Hard</option>
          <option value="14">Extreme</option>
        </select>
      </div>
    )
  }

  prepGameBoard = (choice) => {
    
    let pairs = 8   //choice.target.value // switching between sizes causes stack overflow!! 
    let local = []
    let temp = []

    // this.setState({board:tiles})
    // setTimeout(this.state.board.forEach(item => console.log(`${item.word}: ${item.flipped}`)), 1500)
    
    for (let i=0; i < pairs; i++){
      let choose = this.state.board[Math.floor(Math.random() * this.state.board.length)]

      if (!temp.includes(choose)){
        temp.push(choose)
        let {flipped, word, image} = choose
        let a = {flipped: flipped, word: word, image:image, id:(i+"a")}
        let b = {flipped: flipped, word: word, image:image, id:(i+"b")}
        local.push(a,b)
      } else { i-- }
    }

    //Fisher-Yates Shuffle Algorithm!
    for (let i= local.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = local[i]
        local[i] = local[j]
        local[j] = temp
    }

    // local.forEach(item => console.log(`${item.id}: ${item.word}`))
    this.setState({board:local})
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
        <Route path= '/play' component={Leaderboard}/>
        </Router>
        <Container>
          <Jumbotron>
          <div>
          {this.chooseDifficulty()}
          <div className="board">
            {this.generateRows()}
          </div>
        </div>
          </Jumbotron>
        </Container>
        <Footer />
      </Fragment>
 
      )
  }
}


