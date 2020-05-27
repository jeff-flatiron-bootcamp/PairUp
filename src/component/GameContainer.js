import React, { Component} from 'react'
import Form from './Form'
import Game from './Game'
import AuthHOC from '../HOC/AuthHOC'
import ModalComp from './ModalComp'
import { Button } from 'react-bootstrap'

export class GameContainer extends Component {
    state={
        visible: false,
        finalScore: 0,
        game: false,
        level: "easy",
        win:false
    }

    closeModal=()=> {
        this.setState({ visible: false })
    }

    formSubmit=(level)=>{
        this.setState({game:true, level: level})
    }

    setFinalScore=(score, win)=>{
        this.setState({game:false, visible:true, finalScore: score, win: win})
    }

    handleClick=()=>{
        this.setState({game:false})
    }

    render() {
        const {visible, finalScore, game, level, win}=this.state
        return (
            <div className="col text-center" >
                {game? <Button onClick={this.handleClick}>Stop Game!</Button>:null}
                {game? <Game level={level} setFinalScore={this.setFinalScore}/> :<Form newGame={this.formSubmit}/>}
                <ModalComp visible={visible} closeModal={this.closeModal} score={finalScore} win={win} level={level}/>
            </div>
        )
    }
}

export default AuthHOC(GameContainer)
