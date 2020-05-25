import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Jumbotron } from 'react-bootstrap'
import Countdown from 'react-countdown'

import '../App.css';
import {tiles} from '../data.js'
import Cell from './Cell.js'


class Game extends Component {

  constructor(props) {
      super(props)
    
      this.state = {
        board: tiles,
        choice: null,
        matched: [],
        score: 0,
        difficulty: 0,
        time: 0
      }
  }

  componentDidMount(){
    this.prepGameBoard() 
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

  isAWin = (multiplier=2) => {
    if ((this.state.score * multiplier) === this.state.board.length){

      //send an update to backend with score
      this.setState({board:[], score:0})
      this.setState({board:tiles})
      this.prepGameBoard()

      return alert("You win!")
    }
    else {
      return console.log(`Current score: ${this.state.score * multiplier} / ${this.state.board.length} `)
    }
    
  }

  generateRows = ()=> {

    return this.state.board.map(val => <Cell key={val.id} cellContent={val} onSetChoice={this.setChoice}/>)
  }


  chooseTiles = () => {
    return(
      <div>
        Choose a Tile Set
        <select onChange={this.handleTiles}>
          <option value="Default">Default</option>
          <option value="shapes">Shapes</option>
          <option value="colors">Colors</option>
        </select>
      </div>
    )
  }

  handleTiles = (choice) => {
    console.log(`Chose ${choice.target.value}`)
  }


  chooseDifficulty = () => {
    return (
      <div>
        Choose the Game Difficulty
        <select onChange={this.changeTimer}>
          <option value="60000">Easy</option>
          <option value="45000">Medium</option>
          <option value="30000">Hard</option>
          <option value="20000">Extreme</option>
        </select>
        <input type="button" onClick={this.startTimer} value="Go!" />
      </div>
    )
  }

  changeTimer = (choice) => {
    let time = choice.target.value
    this.setState({difficulty:time})
  }

  startTimer = () => {
    return (<h2><Countdown date={Date.now() + parseInt(this.state.difficulty)}> {this.completed} </Countdown></h2>)
  } 

  completed = () => {
      return (<span>Time's up!</span>)
  }

  prepGameBoard = () => {
    
    let local = []
    let temp = []
    
    for (let i=0; i < 8; i++){
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
    this.setState({board:local})
  }

  render() {
      return (
          <div>
            <Container>
                <Jumbotron>
                {this.chooseDifficulty()}
                <div className="board">
                    {this.generateRows()}
                </div>
                </Jumbotron>
            </Container> 
        </div>
      )
  }
}


export default Game