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
        level: "easy"
    }

    openModal=()=> {
        this.setState({ visible: true })
    }

    closeModal=()=> {
        this.setState({ visible: false })
    }

    formSubmit=(level)=>{
        this.setState({game:true, level: level})
    }

    setFinalScore=(score)=>{
        this.setState({game:false, visible:true, finalScore: score})
    }

    render() {
        const {visible, score, game, level}=this.state
        return (
            <div className="row mb-5">
                {game? <Game level={level} setFinalScore={this.setFinalScore}/> :<Form newGame={this.formSubmit}/>}
                <ModalComp visible={visible} closeModal={this.closeModal} score={score}/>
            </div>
        )
    }
}

export default AuthHOC(GameContainer)
