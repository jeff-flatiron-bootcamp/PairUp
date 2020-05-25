import React, { Component } from 'react'

export class Leaderboard extends Component {
    render() {
        return (
            <div class="container">
                <section id="our-stats">
                    <h2 class="text-green h1 text-center">Leaderboards</h2>
                    <p class="text-uppercase text-center font-italic font-weight-light">Can you make it to the top?</p>
                </section>
                <div className="leaderboardContainer">

                    <div class="leaderboard">
                        <h1><svg class="ico-cup"></svg>Top Players (Easy)</h1>
                        <ol>
                            <li>
                                <mark>Jerry Wood</mark>
                                <small>315</small>
                            </li>
                            <li>
                                <mark>Brandon Barnes</mark>
                                <small>301</small>
                            </li>
                            <li>
                                <mark>Raymond Knight</mark>
                                <small>292</small>
                            </li>
                            <li>
                                <mark>Trevor McCormick</mark>
                                <small>245</small>
                            </li>
                            <li>
                                <mark>Andrew Fox</mark>
                                <small>203</small>
                            </li>
                        </ol>
                    </div>

                    <div class="leaderboard">
                        <h1><svg class="ico-cup"></svg>Top Players (Medium)</h1>
                        <ol>
                            <li>
                                <mark>Jerry Wood</mark>
                                <small>315</small>
                            </li>
                            <li>
                                <mark>Brandon Barnes</mark>
                                <small>301</small>
                            </li>
                            <li>
                                <mark>Raymond Knight</mark>
                                <small>292</small>
                            </li>
                            <li>
                                <mark>Trevor McCormick</mark>
                                <small>245</small>
                            </li>
                            <li>
                                <mark>Andrew Fox</mark>
                                <small>203</small>
                            </li>
                        </ol>
                    </div>

                    <div class="leaderboard">
                        <h1><svg class="ico-cup"></svg>Top Players (Hard)</h1>
                        <ol>
                            <li>
                                <mark>Jerry Wood</mark>
                                <small>315</small>
                            </li>
                            <li>
                                <mark>Brandon Barnes</mark>
                                <small>301</small>
                            </li>
                            <li>
                                <mark>Raymond Knight</mark>
                                <small>292</small>
                            </li>
                            <li>
                                <mark>Trevor McCormick</mark>
                                <small>245</small>
                            </li>
                            <li>
                                <mark>Andrew Fox</mark>
                                <small>203</small>
                            </li>
                        </ol>
                    </div>
                </div>
            </div >
        )
    }
}

export default Leaderboard
