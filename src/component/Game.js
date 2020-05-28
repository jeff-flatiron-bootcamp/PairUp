import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactCountdownClock from 'react-countdown-clock'
import { Container, Jumbotron} from 'react-bootstrap'
import {tiles } from '../data.js'
import '../App.css';
import Cell from './Cell.js'

const INITIAL_STATE = {
    board: tiles[0],
    choice: null,
    matched: [],
    score:0,
    time: 0,
    difficulty: 60,
    timesUp: true,
}

class Game extends Component {

    state = INITIAL_STATE

    componentDidMount() {
        this.prepGameBoard(this.props.tileSet)
        this.postNewUserGame()
        this.changeTimer()
        this.setState({ time: Date.now() })
    }

    //backend functions
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
                    game_type: this.props.level,
                    score: 0                                         //look at how to handle game difficulty level
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
        user_game.timer = 10                                       // difficulty time - leftover timer time
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
    //frontend functions
    startGame = () => {
        return (
            <div className="row mb-5">
                <div className="col text-center" >
                <h2 className="game-text"> Time Left:</h2>
                <div className="col text-center counter" >
                    {(this.state.timesUp) ? null : <ReactCountdownClock seconds={this.state.difficulty} color="#60a3bc" alpha={0.9} size={200} onComplete={this.gameEndsWithTimeOut} /> }
                </div>
                    <h2 className="game-text"> Pairs Matched: {this.state.score}</h2>
                </div>
                <div className="col text-center" >
                <div className={`board-${this.props.number}`}> 
                    {this.generateRows()} 
                </div>
                </div>
            </div>
        )
    }
    

    prepGameBoard = (tileSet) => {

        let local = []
        let temp = []

        switch(tileSet){
            case 'colors':
                temp = tiles[0]
                break;
            case 'shapes':
                temp = tiles[1]
                break;
            case 'emoties':
                temp = tiles[2]
                break;
            default: temp = tiles[0]
        }
        
        for (let i = 0; i < this.props.number/2; i++) {
            let choose = temp[Math.floor(Math.random() * temp.length)]
            if (!local.map(item => item.word).includes(choose.word)) {
                let { word, image } = choose
                let a = { flipped: false, word: word, image: image, id: (i + "a") }
                let b = { flipped: false, word: word, image: image, id: (i + "b") }
                local.push(a, b)
            } else { i-- }
        }

        //Fisher-Yates Shuffle Algorithm!
        for (let i = local.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = local[i]
            local[i] = local[j]
            local[j] = temp
        }
        this.setState({ board: local, timesUp: false })
    }
    generateRows = () => {
        return this.state.board.map(val => <Cell sound={this.props.sound} key={val.id} cellContent={val} onSetChoice={this.setChoice} />)
    }
    changeTimer = () => {
        let level = this.props.level
        let time = 0
        switch (level) {
            case 'Easy':
                time = 60
                break;
            case 'Medium':
                time = 40
                break
            case 'Hard':
                time = 20
                break;
            default:
                console.log(`Input Failure`);
        }
        this.setState({ difficulty: time, timesUp: false, time: Date.now() })
    }

    setChoice = (cell) => {
        if (!this.state.timesUp) {
            if (!this.state.matched.includes(cell)) {
                this.setState({
                    board: this.state.board.map(card => {
                        if (card === cell) {
                            card.flipped = true
                        }
                        return card
                    })
                })
                let pair = this.state.choice
                if (!pair) {
                    this.setState({ choice: cell })
                }
                else {                                  //get timer's previous state and pass it forward into render?
                    setTimeout(() => {
                        if ((pair.word === cell.word) && (pair.id !== cell.id)) {
                            console.log(`They match!`)
                            this.setState({
                                score: this.state.score + 1,
                                matched: [...this.state.matched, pair, cell]
                            })
                            this.isAWin()
                        }
                        else {
                            console.log(`They don't match!`)
                            this.setState({
                                board: this.state.board.map(card => {
                                    if ((card === cell) || (card === pair)) {
                                        card.flipped = false
                                    }
                                    return card
                                })
                            })
                        }
                    }, 750)
                    setTimeout(() => { this.setState({ choice: null }) }, 200)
                }
            }
            else { console.log(`This card has already been matched!`) }
        }
    }

    isAWin = () => {
        if ((this.state.matched.length) === this.state.board.length) {

        let [elapsedTime, balancedScore] = this.gameStats()
        console.log(`Win: ${balancedScore} in ${elapsedTime}s`)
        this.setState({ time: elapsedTime, score: balancedScore, timesUp: true }, () => this.patchUserGame())

        this.props.setFinalScore(balancedScore, true)
        }
        else {
        return console.log(`Current score: ${this.state.score * 2} / ${this.state.board.length} `)
        }
    }

    gameEndsWithTimeOut = () => {
        //final calculations
        let [elapsedTime, balancedScore] = this.gameStats()
        console.log(`Timeout: ${balancedScore} in ${elapsedTime}s`)
        this.setState({ time: elapsedTime, score: balancedScore, timesUp: true }, () => this.patchUserGame())
        this.props.setFinalScore(balancedScore, false)
    }

    gameStats = () => {
        //final calculations
        let multiplier
        switch (this.state.difficulty) {
            case 60:
                multiplier = 20
                break;
            case 40:
                multiplier = 40
                break
            case 20:
                multiplier = 60
                break;
            default: multiplier = 10;
        } 
        let elapsedTime = Math.floor((Date.now() - this.state.time) / 1000)        
        let balancedScore = Math.floor((this.state.score * multiplier) - elapsedTime)+(2*this.props.number)
        if (balancedScore<0){
            balancedScore=0
        }

        return [elapsedTime, balancedScore]
    }

    render() {
        return (
            <div>
                <Container>
                    <Jumbotron>
                        {this.startGame()}
                    </Jumbotron>
                </Container>
            </div>
        )
    }
}
export default Game