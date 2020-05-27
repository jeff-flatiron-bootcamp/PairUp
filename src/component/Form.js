import React, { Component } from 'react'

export class Form extends Component {
    state = {
        level: "Easy",
        sound: true
    }

    handleChange = (event) => {
        this.setState({ level: event.target.value })
    }
    handleSound=()=>{
        let value=!this.state.sound
        this.setState({ sound:  value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.newGame(this.state.level, this.state.sound)
    }

    render() {
        return (
            <div className="col text-center">
                <form >
                    <div class="form-group">
                        <h3>Choose the Game Difficulty:</h3>
                        <select name="time" onChange={(event) => this.handleChange(event)}>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                    <h3>Play with Sounds?</h3>
                    <label class="switch">
                        <input type="checkbox" defaultChecked onChange={this.handleSound}/>
                            <span class="slider round"></span>
                    </label>
                        <div class="form-group">
                            <input type="button" value="Start Game!" onClick={(event) => this.handleSubmit(event)} />
                        </div>
                    </form>
                </div>
        )
    }
}

export default Form
