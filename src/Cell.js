import React, { Component } from 'react'

class Cell extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            //  show: false
        }
    }

    handleClick = ({cellContent, onSetChoice}) => {
        onSetChoice(cellContent)
    }

    
    render() {
        const {flipped, word, image} = this.props.cellContent

        return (
            <div className="cell-container" onClick={() => this.handleClick(this.props)}>
                {flipped ? <img alt={word} src={image}></img> : null}
            </div>
        )
    }
}

export default Cell
