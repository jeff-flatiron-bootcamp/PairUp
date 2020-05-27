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
        tileSet: "colors",
        win:false,
        sound:true
    }

    openModal=()=> {
        this.setState({ visible: true })
    }

    closeModal=()=> {
        this.setState({ visible: false })
    }

    formSubmit=(level, sound, tiles)=>{
        this.setState({game:true, level: level, sound: sound, tileSet:tiles})
    }

    setFinalScore=(score, win)=>{
        this.setState({game:false, visible:true, finalScore: score, win: win})
    }

    handleClick=()=>{
        this.setState({game:false})
    }

    render() {
        const {visible, finalScore, game, level, win, sound, tileSet}=this.state
        return (
            <div className="col text-center" >
                {game? <Button onClick={this.handleClick}>Stop Game!</Button>:null}
                {game? <Game sound={sound} level={level}  tileSet={tileSet} setFinalScore={this.setFinalScore}/> :<Form newGame={this.formSubmit}/>}
                <ModalComp sound={sound} visible={visible} closeModal={this.closeModal} score={finalScore} win={win} level={level}/>
            </div>
        )
    }
}

export default AuthHOC(GameContainer)
