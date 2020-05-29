import React, { Component } from 'react'
import puzzle from './742px-Icone_Puzzle.svg.png'

export class About extends Component {
    render() {
        return (
            <div className="how-section1">
                <div className="row">
                    <div className="col-md-6 how-img">
                        <img src={puzzle} className="rounded-circle img-fluid" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h4>About Us</h4>
                        <h4 className="subheading">Pair UP was created by three junior developers with a passion for self improvement</h4>
                        <p className="text-muted"> Here at Pair UP we believe learning should be fun and effortless! Thats why we developed this game where in just 10 minutes each day you can train your brain. </p>
                        <br></br>
                        <h4>Win Big!</h4>
                        <h4 className="subheading">Improve Your Score</h4>
                        <p className="text-muted">There are three ways to improve your score - choose a harder difficulty, solve the game faster, and add more tiles!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h4>Play and Become Smarter!</h4>
                        <h4 className="subheading">Memory and Matching Games Have Many Benefits:</h4>
                        <p className="text-muted"> Studies have shown that games like matching pairs can improve concentration, short term memory and attention to detail. Play our top rated game here at Pair UP and become the best version of yourself!</p>
                    </div>
                    <div className="col-md-6 how-img">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Red_Silhouette_-_Brain.svg/410px-Red_Silhouette_-_Brain.svg.png" className="rounded-circle img-fluid" alt="" />
                    </div>
                </div>    
            </div>
        )
    }
}

export default About
