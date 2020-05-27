import React, { Component } from 'react'

export class Form extends Component {
    state= {
        level: "Easy",
        tiles: "colors"
    }

    handleChange=(event)=>{
        this.setState({level: event.target.value})
    }

    handleTiles=(event)=>{
        this.setState({tiles: event.target.value})
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.newGame(this.state.level, this.state.tiles)
    }

    render() {
        return (
            <div className="col text-center">
                <form >
                    <b>*Choose Tile Set*</b>
                    <select name="tiles" onChange={(event) => this.handleTiles(event)}>
                        <option value="colors">Colors</option>
                        <option value="shapes">Shapes</option>
                    </select>
                    {"   "}
                    <b>*Choose the Game Difficulty*</b>
                    <select name="time" onChange={(event)=>this.handleChange(event)}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <input type="button" value="Start Game!" onClick={(event)=> this.handleSubmit(event)} />
                </form>
            </div>
        )
    }
}

export default Form
