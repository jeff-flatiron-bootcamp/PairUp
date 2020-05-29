import React from 'react'
import useSound from 'use-sound';
import boopSfx from '../images/Card.wav';

const Cell = (props) => {
    const { flipped, word, image } = props.cellContent
    const [play] = useSound(boopSfx);

    const handleClick = ({ cellContent, onSetChoice }) => {
       if (props.sound){
           play()
       }
        onSetChoice(cellContent)
    }

    return (
        flipped? 
        <div style={{backgroundImage: `url(${image}`}} alt={word} className="cell-container" onClick={() => handleClick(props)}>
        </div>
        :
        <div alt={word} className="cell-container" onClick={() => handleClick(props)}>
    </div>
    )
}

export default Cell
