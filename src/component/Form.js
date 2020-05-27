import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
                <div className="col text-center">
                    <form  onClick={this.props.newGame} >
                        Choose the Game Difficulty
                        <select name="time" >
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                        <input type="button" value="Start Game!"/>
                    </form>
                </div>
        )
    }
}

export default Form
