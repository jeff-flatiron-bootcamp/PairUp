import React, { Component } from 'react'
import AuthHOC from '../HOC/AuthHOC'
import { Button } from 'react-bootstrap'

export class UserHome extends Component {

	state = {
		scores: {},
		file: this.props.user.avatar,
		show:false
	}

	componentDidMount() {
		fetch('http://localhost:3000/api/v1/user_high_scores', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
			.then(res => res.json())
			.then(res => this.setState({ scores: res.high_scores }))
	}

	handleFile = (event) => {
		const file = event.target.files[0]
		if (File) {
			this.setState({ file: URL.createObjectURL(file) })
		}
	}

	showForm=()=>{
		this.setState({show: !this.state.show})
	}

	render() {
		const name = this.props.user ? this.props.user.username : "Player"
		return (
			<div className="container">
				<section id="our-stats">

					<div className="row mb-5">
						<div className="col text-center">
							<h2 className="text-green h1 text-center">{`Welcome ${name}!`}</h2>
							<p className="text-uppercase font-italic font-weight-light">Remember to play at least 10 minutes a day to build your memory!</p>
						</div>
					</div>
					<div className="row mb-5">
						<div className="col text-center">
							<img src={this.state.file} className="img-fluid avatar" alt="" />
						</div>

					</div>

					<div className="row mb-5">
						<div className="col text-center">
						<form>
						<Button onClick={this.showForm}>Upload New Image</Button> 
							{this.state.show?
							<div class="custom-file">
								<input type="file" class="custom-file-input" id="customFile" onChange={this.handleFile}/>
								<label class="custom-file-label" for="customFile">Choose file</label>
								</div>
							: null}
						</form>
						</div>
					</div>

					<div className="row text-center">
						<div className="col">
							<div className="counter">
								<i className="fa fa-hourglass-o fa-2x text-green"></i>
								<h2 className="timer count-title count-number" data-to="100" data-speed="1500">{this.state.scores.easy ? this.state.scores.easy.score : 0} points</h2>
								<p className="count-text ">Highscore (Easy)</p>
							</div>
						</div>
						<div className="col">
							<div className="counter">
								<i className="fa fa-hourglass-half fa-2x text-green"></i>
								<h2 className="timer count-title count-number" data-to="1700" data-speed="1500">{this.state.scores.medium ? this.state.scores.medium.score : 0} points</h2>
								<p className="count-text ">Highscore (Medium)</p>
							</div>
						</div>
						<div className="col">
							<div className="counter">
								<i className="fa fa-hourglass fa-2x text-green"></i>
								<h2 className="timer count-title count-number" data-to="11900" data-speed="1500">{this.state.scores.hard ? this.state.scores.hard.score : 0} points</h2>
								<p className="count-text ">Highscore (Hard)</p>
							</div>
						</div>
						{/* <div className="col">
							<div className="counter">
								<i className="fa fa-clock-o fa-2x text-green"></i>
								<h2 className="timer count-title count-number" data-to="157" data-speed="1500">157</h2>
								<p className="count-text ">Total Time Played</p>
							</div>
						</div> */}
					</div>
				</section>
			</div>
		)
	}
}

export default AuthHOC(UserHome)
