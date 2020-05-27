import React from 'react'
import useSound from 'use-sound';
import boopSfx from '../images/Card.wav';

const Cell = (props) => {
    const { flipped, word, image } = props.cellContent
    const [play] = useSound(boopSfx);

    const handleClick = ({ cellContent, onSetChoice }) => {
        play()
        onSetChoice(cellContent)
    }

    return (
        <div className="cell-container" onClick={() => handleClick(props)}>
            {flipped ? <img alt={word} src={image}></img> : null}
        </div>
    )
}

export default Cell
