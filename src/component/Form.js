import React, { Component } from 'react'

export class Form extends Component {
    state= {
        level: "Easy"
    }

    handleChange=(event)=>{
        this.setState({level: event.target.value})
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.newGame(this.state.level)
    }

    render() {
        return (
                <div className="col text-center">
                    <form  >
                        Choose the Game Difficulty
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
