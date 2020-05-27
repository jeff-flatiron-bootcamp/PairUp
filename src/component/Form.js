import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
                <div className="col text-center">
                    <form  >
                        Choose the Game Difficulty
                        <select name="time" onChange={this.props.changeTimer}>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                        <input type="button" value="Start Game!" onClick={this.props.newGame} />
                    </form>
                </div>
        )
    }
}

export default Form
