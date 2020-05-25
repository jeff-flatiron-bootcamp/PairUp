import React, { Component } from 'react'

export class Login extends Component {

    state = {
        nameLogin: "",
        passwordLogin: "",
        nameSignup: "",
        passwordSignup: "",
        countrySignup: "",
        avatarSignup: "https://upload.wikimedia.org/wikipedia/commons/4/49/Syvia_of_Sylvia%27s_reaturant_N.Y.C_%28cropped%29.jpg"
    }
  
    handleLogin = (event) =>{        
        event.preventDefault()    
        const {nameLogin, passwordLogin} = this.state
        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
            },
            body: JSON.stringify({
            user: {
                username: nameLogin,
                password: passwordLogin,          
            }
            })
        })
        .then(r => r.json())
        .then(json => this.storeToken(json))
    }

    handleCreateUser = (event) => {
        event.preventDefault()
        const {nameSignup, passwordSignup, countrySignup, avatarSignup} = this.state                
        fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: nameSignup,
                    password: passwordSignup,
                    country: countrySignup,
                    avatar: avatarSignup
                }
            })
        })
        .then(r => r.json())
        .then(json => this.storeToken(json))                
    }

    storeToken(json)
    {            
      localStorage.setItem('user', json.user)
      localStorage.setItem('token', json.jwt)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="container login-container">
                <div class="row">
                    <div class="col-md-6 login-form-1">
                        <h3>Login!</h3>
                        <form onSubmit={this.handleLogin}>
                            <div class="form-group">
                                <input name="nameLogin" type="text" class="form-control" placeholder="User Name" value={this.state.nameLogin} onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <input name="passwordLogin" type="password" class="form-control" placeholder="Your Password *" value={this.state.passwordLogin} onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btnSubmit" value="Login" />
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6 login-form-2">
                        <h3>Signup!</h3>
                        <form onSubmit={this.handleCreateUser}>
                            <div class="form-group">
                                <input name="nameSignup" type="text" class="form-control" placeholder="User Name" value={this.state.nameSignup} onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <input name="countrySignup" type="text" class="form-control" placeholder="Your Country" value={this.state.countrySignup} onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <input name="passwordSignup" type="password" class="form-control" placeholder="Your Password *" value={this.state.passwordSignup} onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btnSubmit" value="Signup" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login