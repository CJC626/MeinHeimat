import logo from '../logo.svg';
import React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            remember: true
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleRememberChange = this.handleRememberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event){
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }

    handleRememberChange(event){
        this.setState({remember: event.target.checked});
    }

    handleSubmit(event){
        console.info(this.state.username);
        console.info(this.state.remember);
    }

    render(){
        return (
            <main className="form-signin">
            <form onSubmit={this.handleSubmit}>
                <img src={logo} alt="" className="mb-4"></img>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating">
                    <input 
                        type="email" 
                        value={this.state.username} 
                        className="form-control" 
                        id="floatingInput" 
                        onChange={this.handleUsernameChange}
                        placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password" 
                        value={this.state.password} 
                        className="form-control" 
                        id="floatingPassword" 
                        onChange={this.handlePasswordChange}
                        placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input 
                            type="checkbox"
                            defaultChecked={this.state.remember}
                            onChange={this.handleRememberChange}
                            value={this.state.remember}/> Remember me
                    </label>
                </div>
                <button
                    className="w-100 btn btn-lg btn-primary" 
                    type="submit">Sign in</button>
            </form>
            </main>
        );
    }
}

export default Login;