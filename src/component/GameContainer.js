import React, { Component } from 'react'
import Form from './Form'
import Game from './Game'
import AuthHOC from '../HOC/AuthHOC'
import ModalComp from './ModalComp'

export class GameContainer extends Component {
    state={
        visible: false,
        finalScore: 0,
        game: false,
        level: "easy",
        tileSet: "colors"
    }

    openModal=()=> {
        this.setState({ visible: true })
    }

    closeModal=()=> {
        this.setState({ visible: false })
    }

    formSubmit=(level, tiles)=>{
        this.setState({game:true, level: level, tileSet:tiles})
    }

    setFinalScore=(score)=>{
        this.setState({game:false, visible:true, finalScore: score})
    }

    render() {
        const {visible, score, game, level, tileSet}=this.state
        return (
            <div className="row mb-5">
                {game? <Game level={level} tileSet={tileSet} setFinalScore={this.setFinalScore}/> :<Form newGame={this.formSubmit}/>}
                <ModalComp visible={visible} closeModal={this.closeModal} score={score}/>
            </div>
        )
    }
}

export default AuthHOC(GameContainer)
