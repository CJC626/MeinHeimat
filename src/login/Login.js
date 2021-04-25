import React from 'react';
import './Login.css';
import LoginForm from './LoginForm';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.setToken = props.setToken.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    handleUsernameChange(event){
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        const formData = {
            username: this.state.username,
            password: this.state.password,
            remember: this.state.remember
        };
        const headers = {
            'Content-Type': 'application/json'
        };
        fetch(process.env.REACT_APP_AUTH_ENDPOINT,
            {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: headers
            }
        ).then(resp => resp.json())
        .then(data => {
            console.info(data);
            this.setToken(data);
        });
    }

    render(){
        return (
            <main className="form-signin">
                <LoginForm 
                    submitForm={this.handleSubmit} 
                    handlePasswordChange={this.handleUsernameChange}
                    handleUsernameChange={this.handleUsernameChange}/>
            </main>
        );
    }
}

export default Login;