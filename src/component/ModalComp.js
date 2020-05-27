import React, { Component } from 'react'
import trophy from './512px-Circle-icons-trophy_(dark).svg.png'
import fb from '../images/Facebook.png'
import email from '../images/Email.png'
import { Link } from 'react-router-dom'
import {Modal, Button} from 'react-bootstrap'

export class ModalComp extends Component {
    render() {
        return (
            <Modal displayClassName="modal" show={this.props.visible} width="400" height="800">
            <div className="win">
                <h1>You Won!</h1>
                <img width="200" src={trophy} alt="win" />
                <p>Game Dificulty: </p>
                <p>Your Score: {this.props.score}</p>
                <strong>Enjoying the Game? Share with your friends and family! </strong>
                <ul className="share-buttons">
                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.localhost3000%2F&quote=PairUp!" title="Share on Facebook" target="_blank"><img alt="Share on Facebook" src={fb} /></a></li>
                    <li><a href="mailto:?subject=PairUp!&body=Come%20play%20this%20super%20fun%20memory%20game%20and%20improve%20your%20memory!:%20http%3A%2F%2Fwww.localhost3000%2F" target="_blank" title="Send email"><img alt="Send email" src={email} /></a></li>
                </ul>
                <Button variant="primary" onClick={() => this.props.closeModal()}><Link to='/play'> Play Again! </Link> </Button>
                <Button variant="primary" onClick={() => this.props.closeModal()}><Link to='/home'> Back to Home </Link></Button>
            </div>
        </Modal>
        )
    }
}

export default ModalComp
