import React, { Component } from 'react'
import AuthHOC from '../HOC/AuthHOC'

export class UserHome extends Component {
    render() {
		const name=JSON.parse(localStorage.getItem('user')).username
        return (
<div className="container">
	<section id="our-stats">
		<div className="row mb-5">
			<div className="col text-center">
				<h2 className="text-green h1 text-center">{`Welcome ${name}!`}</h2>
				<p className="text-uppercase font-italic font-weight-light">Remember to play at least 10 minutes a day to build your memory!</p>
			</div>
		</div>
		<div className="row text-center">
			<div className="col">
					<div className="counter">
						<i className="fa fa-hourglass-o fa-2x text-green"></i>
						<h2 className="timer count-title count-number" data-to="100" data-speed="1500">100</h2>
						<p className="count-text ">Highscore (Easy)</p>
					</div>
			</div>
			<div className="col">
					<div className="counter">
						<i className="fa fa-hourglass-half fa-2x text-green"></i>
						<h2 className="timer count-title count-number" data-to="1700" data-speed="1500">1,700</h2>
						<p className="count-text ">Highscore (Medium)</p>
					</div>
			</div>
			<div className="col">
					<div className="counter">
						<i className="fa fa-hourglass fa-2x text-green"></i>
						<h2 className="timer count-title count-number" data-to="11900" data-speed="1500">11,900</h2>
						<p className="count-text ">Highscore (Hard)</p>
					</div>
			</div>
			<div className="col">
					<div className="counter">
						<i className="fa fa-clock-o fa-2x text-green"></i>
						<h2 className="timer count-title count-number" data-to="157" data-speed="1500">157</h2>
						<p className="count-text ">Total Time Played</p>
					</div>
			</div>
		</div>
	</section>
</div>
        )
    }
}

export default AuthHOC(UserHome)
