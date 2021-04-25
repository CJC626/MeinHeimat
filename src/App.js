import Login from './login/Login';
import Landing from './landing/Landing';
import './App.css';
import LeftNavBar from './navbar/LeftNavBar';
import Header from './header/Header';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  const getToken = () => {
    const tokenString = sessionStorage.getItem("cjc-token");
    return tokenString;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem("cjc-token", userToken);
    setToken(userToken);
  };

  if(!token){
    return <Login setToken={saveToken} />
  }

  return (
    <Router>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <LeftNavBar />
            <Switch>
              <Route 
                exact
                path="/notes"
                render={(props) => <Landing {...props} landingText="Notes"/>} />
              <Route 
                exact
                path="/photos"
                render={(props) => <Landing {...props} landingText="Photos"/>} />
              <Route path="/">
                <Landing landingText="Main" />
              </Route>
            </Switch>
          </div>
        </div>
    </Router>

  );
}

export default App;
