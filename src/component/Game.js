import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactCountdownClock from 'react-countdown-clock'
import { Container, Jumbotron, Modal, Button } from 'react-bootstrap'
import trophy from './512px-Circle-icons-trophy_(dark).svg.png'
import AuthHOC from '../HOC/AuthHOC'
import fb from '../images/Facebook.png'
import email from '../images/Email.png'
import '../App.css';
import {tiles} from '../data.js'
import Cell from './Cell.js'


const URL = "localhost:3000"
const  INITIAL_STATE= {
    set: "colors",

    board: tiles,
    choice: null,
    matched: [],
    score: 0,
    time: 0,
    difficulty: 60,
    timesUp: true,
    visible : false
  } 

class Game extends Component {

  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
  }

  openModal() {
    this.setState({
        visible : true
    });
}

closeModal() {
    this.setState({
        visible : false
    });
}

  componentDidMount(){
    this.prepGameBoard() 
    // this.postNewUserGame()
    // this.setState({time: Date.now()})
  }

  postNewUserGame = () => {
    let token = localStorage.getItem('token');    
    fetch('http://localhost:3000/api/v1/newgame', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        user: {
          game_type: "1"                                         //look at how to handle game difficulty level
        }      
      })     
    })
    .then(res => res.json())
    .then(userGameData => this.storeUserGame(userGameData))
  }

  patchUserGame = () => {
    let token = localStorage.getItem('token');  
    let user_game = JSON.parse(localStorage.getItem('user_game'))
    user_game.score = this.state.score                          // multiplier?
    user_game.timer =  10                                       // difficulty time - leftover timer time


    fetch('http://localhost:3000/api/v1/updategame', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        user: {
          user_game: user_game                                  //look at how to handle game difficulty level
        }      
      })     
    })
    .then(res => res.json())
    .then(json => console.log(`Updated db with: ${json}`))

  }

  storeUserGame = (userGameData) => {    
    localStorage.setItem("user_game", JSON.stringify(userGameData.created_UserGame))
  }


  setChoice = (cell) =>{

    if (!this.state.timesUp){
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
    else {                                  //get timer's previous state and pass it forward into render?
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

    else { console.log(`This card has already been matched!`)}}
  }

  isAWin = () => {
    if ((this.state.matched.length) === this.state.board.length){

      //final calculations
      let elapsedTime = (Date.now() - this.state.time) / 1000
      let balancedScore = (this.state.score / this.state.difficulty) * 100        
      console.log(`Win: ${balancedScore} in ${elapsedTime}s`)   
    //   this.setState({time: elapsedTime, score: balancedScore})     

      //update database
      this.patchUserGame()

      this.setState(INITIAL_STATE)

      //call win image!
      this.openModal()
    }
    else {
      return console.log(`Current score: ${this.state.score * 2} / ${this.state.board.length} `)
    }
    
  }

  generateRows = ()=> {
    return this.state.board.map(val => <Cell key={val.id} cellContent={val} onSetChoice={this.setChoice}/>)
  }


  changeTimer = (choice) => {
    let level = choice.target.value
    let time = 0
    switch (level) {
        case 'Easy':
          time=60
          break;
        case 'Medium':
          time=40
          break
        case 'Hard':
          time=20
          break;
        default:
          console.log(`Input Failure`);
    }
    console.log(`Start: ${Date.now()}`)
    this.setState({difficulty:time, timesUp:false, time: Date.now()})

  }

  newGame = () => {
    console.log(`Choosing tiles`)
    this.prepGameBoard()
    this.postNewUserGame()
    this.setState({time: Date.now()})
  } 

  gameEndsWithTimeOut = () => {
    //final calculations
    let elapsedTime = (Date.now() - this.state.time) / 1000
    let balancedScore = parseInt((this.state.score / this.state.difficulty) * 100)     
    console.log(`Timeout: ${balancedScore} in ${elapsedTime}s`)   
    this.setState({time: elapsedTime, score: balancedScore, timesUp: true}, () => this.patchUserGame())     
    this.setState(INITIAL_STATE)
}


  prepGameBoard = () => {
    
    let local = []
    let temp = []

    for (let i=0; i < 8; i++){
      let choose = this.state.board[Math.floor(Math.random() * this.state.board.length)]
      if (!temp.map(item => item.word).includes(choose.word)){
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
    this.setState({board:local, timesUp:false})
  }

  startGame = () => {
      return (
        <div>
          <div>
           <form  >
            {/* Choose the Game Difficulty
            <select name="time" onChange={this.changeTimer}>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select> */}
            <input type="button" value="Start Game!" onClick={this.newGame}/>
            </form>
            {/* <ReactCountdownClock seconds={this.state.difficulty} color="#cd4b4b" alpha={0.9} size={75} onComplete={this.gameEndsWithTimeOut} /> */}
          </div>
          <h2>Score: {this.state.score}</h2>
          <div className="board"> {this.generateRows()} </div>
        </div>
    )
  }

  render() {
      return (
          <div>
            <Container>
                <Jumbotron>
                {this.startGame()}
                </Jumbotron>
                <Modal displayClassName="modal" show={this.state.visible} width="400" height="800" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div className="win">
                        <h1>You Won!</h1>
                        <img width="200" src={trophy} alt="win"/>
                        <p>Game Dificulty: </p>
                        <p>Your Score: </p>
                        <p>Your Highscore: </p>
                        <strong>Enjoying the Game? Share with your friends and family! </strong>
                        <ul className="share-buttons">
            <li><a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.localhost3000%2F&quote=PairUp!" title="Share on Facebook" target="_blank"><img alt="Share on Facebook" src={fb} /></a></li>
            <li><a href="mailto:?subject=PairUp!&body=Come%20play%20this%20super%20fun%20memory%20game%20and%20improve%20your%20memory!:%20http%3A%2F%2Fwww.localhost3000%2F" target="_blank" title="Send email"><img alt="Send email" src={email} /></a></li>
          </ul>
                        <Button variant="primary" onClick={()=> this.closeModal()}>Play Again! </Button>
                        <Button variant="primary" onClick={()=> this.closeModal()}>Back to Home </Button>
                    </div>
                </Modal>
            </Container> 
        </div>
      )
  }
}


export default AuthHOC(Game)