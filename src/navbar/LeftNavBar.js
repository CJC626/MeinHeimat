import React from 'react';
import './LeftNavBar.css';
import { Home, FileText, Image } from 'react-feather';
import { Link } from 'react-router-dom';

class LeftNavBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                <span><Home /></span>
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/notes">
                                <span><FileText /></span>
                                Notes
                            </Link>
                        </li>
                        <li>
                        <Link className="nav-link" to="/photos">
                                <span><Image /></span>
                                Photos
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

}

export default LeftNavBar;