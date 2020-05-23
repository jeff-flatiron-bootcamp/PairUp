import React, { Component } from 'react'

class Cell extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            //  show: false
        }
    }

    handleClick = () => {
        this.props.incrementFlip(this.props.cellContent.id)
    }

    
    render() {
        const {flipped} = this.props.cellContent
        const {word} = this.props.cellContent
        return (
            <div className="cell-container">
                <div className="cell" onClick={this.handleClick}>
                    {flipped ? word : null}
                </div>
            </div>
        )
    }
}

export default Cell
