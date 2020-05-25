import React, { Component } from 'react'

export class UserHome extends Component {
    render() {
        return (
<div class="container">
	<section id="our-stats">
		<div class="row mb-5">
			<div class="col text-center">
				<h2 class="text-green h1 text-center">Welcome User!</h2>
				<p class="text-uppercase font-italic font-weight-light">Remember to play at least 10 minutes a day to build your memory!</p>
			</div>
		</div>
		<div class="row text-center">
			<div class="col">
					<div class="counter">
						<i class="fa fa-hourglass-o fa-2x text-green"></i>
						<h2 class="timer count-title count-number" data-to="100" data-speed="1500">100</h2>
						<p class="count-text ">Highscore (Easy)</p>
					</div>
			</div>
			<div class="col">
					<div class="counter">
						<i class="fa fa-hourglass-half fa-2x text-green"></i>
						<h2 class="timer count-title count-number" data-to="1700" data-speed="1500">1,700</h2>
						<p class="count-text ">Highscore (Medium)</p>
					</div>
			</div>
			<div class="col">
					<div class="counter">
						<i class="fa fa-hourglass fa-2x text-green"></i>
						<h2 class="timer count-title count-number" data-to="11900" data-speed="1500">11,900</h2>
						<p class="count-text ">Highscore (Hard)</p>
					</div>
			</div>
			<div class="col">
					<div class="counter">
						<i class="fa fa-clock-o fa-2x text-green"></i>
						<h2 class="timer count-title count-number" data-to="157" data-speed="1500">157</h2>
						<p class="count-text ">Total Time Played</p>
					</div>
			</div>
		</div>
	</section>
</div>
        )
    }
}

export default UserHome
