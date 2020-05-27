import React, { Component } from 'react'
import AuthHOC from '../HOC/AuthHOC'

export class Leaderboard extends Component {

    state={
        scores: {}
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/high_scores', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${ localStorage.getItem('token')}`
            }
          })
          .then(res => res.json())
          .then(res=>this.setState({scores: res.high_scores}))
    }

    makeScoresPretty(difficulty){
    return  this.state.scores[difficulty].map(score =><li> <mark>{score.user.username}</mark><small>{score.user_game.score}</small></li>)

    }

    render() {
        return (
            <div class="container">
                <section id="our-stats">
                    <h2 className="text-green h1 text-center">Leaderboards</h2>
                    <p className="text-uppercase text-center font-italic font-weight-light">Can you make it to the top?</p>
                </section>
                <div className="leaderboardContainer">

                    <div className="leaderboard">
                        <h1><svg className="ico-cup"></svg>Top Players (Easy)</h1>
                        <ol>
                       { !this.state.scores["easy_5"] ? null: this.makeScoresPretty("easy_5")}
                       </ol>
                    </div>

                    <div className="leaderboard">
                        <h1><svg className="ico-cup"></svg>Top Players (Medium)</h1>
                        <ol>
                        { !this.state.scores["easy_5"] ? null: this.makeScoresPretty("medium_5")}
                        </ol>
                    </div>

                    <div className="leaderboard">
                        <h1><svg className="ico-cup"></svg>Top Players (Hard)</h1>
                        <ol>
                        { !this.state.scores["easy_5"] ? null: this.makeScoresPretty("hard_5")}
                        </ol>
                    </div>
                </div>
            </div >
        )
    }
}

export default AuthHOC(Leaderboard)
