import React from 'react';
import './Header.css';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(event){
        sessionStorage.removeItem("cjc-token");
        this.setState({ token: null });
    }

    render(){
        return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">Chris</a>
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                <a className="nav-link" onClick={this.handleLogout} href="/">Sign out</a>
                </li>
            </ul>
        </header>
        );
    }
}

export default Header;