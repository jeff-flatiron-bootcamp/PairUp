import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {board} from './data.js'
import Cell from './Cell.js'
// square = child component 
// state { visibile? }

export default class App extends Component {


  constructor(props) {
      super(props)
    
      this.state = {
        board: this.transformBoard(board)
      }
  }


  incrementFlip = (id) => {

      this.setState(prevState => {
        let newState = prevState.board.map(cell => {
          if (cell.id === id) {
            cell.flipped = true
          } 
          return cell
        })
        return {board: newState}
      
      })
  }

  incrementFlip2 = (id) => {

    this.setState(prevState => {
      return {board: prevState.board.map(cell => {
        if (cell.id === id) {
          cell.flipped = true
        } 
        return cell
      })
    }
    })
}

  transformBoard = (board) => {
    let i = -1
    return board.map(word => {
        i++
        return {id: i, word: word, flipped: false, guessed: false}})

  }


  generateRows = (board)=> {

    return board.map(val => <Cell key={val.id} cellContent={val} incrementFlip={this.incrementFlip}/>)
  }


  render() {
      return (
          <div className="board">
              {this.generateRows(this.state.board)}
          </div>
      )
  }
}


