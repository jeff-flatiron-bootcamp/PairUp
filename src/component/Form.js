import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

export class Form extends Component {
    state = {
        level: "Easy",
        tiles: "colors",
        sound: true,
        number: 8
    }

    handleChange = (event) => {
        this.setState({ level: event.target.value })
    }
    handleSound=()=>{
        let value=!this.state.sound
        this.setState({ sound:  value})
    }
    handleTiles=(event)=>{
        this.setState({tiles: event.target.value})
    }

    handleNumber=(event)=>{
        this.setState({number: parseInt(event.target.value)})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.newGame(this.state.level, this.state.sound, this.state.tiles, this.state.number)
    }

    render() {
        return (
            <div className="game-form text-center">
                <h1>How Would You Like to Play?</h1>
                    <div class="form-group">
                    <h3>Choose Tile Set:</h3>
                    <select name="tiles" onChange={(event) => this.handleTiles(event)}>
                        <option value="colors">Colors</option>
                        <option value="shapes">Shapes</option>
                        <option value="faces">Faces</option>
                    </select>
                    <h3>Choose the Game Difficulty:</h3>
                    <select name="time" onChange={(event) => this.handleChange(event)}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <h3>Choose the Game Board Size:</h3>
                    <select name="time" onChange={(event) => this.handleNumber(event)}>
                        <option value="8">8</option>
                        <option value="16">16</option>
                        <option value="20">20</option>
                    </select>
                    </div>
                    <h3>Play with Sounds?</h3>
                    <label class="switch">
                        <input type="checkbox" defaultChecked onChange={this.handleSound}/>
                            <span class="slider round"></span>
                    </label>
                    <div class="form-group">
                            <Button variant="primary" onClick={(event) => this.handleSubmit(event)}>Start Game!</Button>
                        </div>
                </div>
        )
    }
}

export default Form
