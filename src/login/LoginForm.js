import React from 'react';
import logo from '../logo.svg';

class LoginForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            remember: false
        };
        this.submitForm = props.submitForm;
        this.handlePasswordChange = props.handlePasswordChange;
        this.handleUsernameChange = props.handleUsernameChange;
        this.handleRememberChange = this.handleRememberChange.bind(this);
    }

    handleRememberChange(event){
        this.setState({remember: event.target.checked});
    }

    render(){

        return (
            <form 
                data-testid="login-form"
                onSubmit={this.submitForm}>
            <img src={logo} alt="" className="mb-4"></img>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
                <input 
                    type="email" 
                    data-testid="username"
                    value={this.state.username} 
                    className="form-control" 
                    id="floatingUsername" 
                    onChange={this.handleUsernameChange}
                    placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input
                    type="password" 
                    data-testid="password"
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
                        id="floatingRemember"
                        defaultChecked={this.state.remember}
                        onChange={this.handleRememberChange}
                        value={this.state.remember}/> Remember me
                </label>
            </div>
            <button
                className="w-100 btn btn-lg btn-primary" 
                type="submit">Sign in</button>
        </form>
        );
    }

}

export default LoginForm;