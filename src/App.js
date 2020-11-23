import React from 'react';
import Home from "./pages"
import SigninPage from "./pages/Signin";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
    	<Route path="/" component={Home} exact />
    	<Route path="/signin" component={SigninPage} exact />
    </Switch>
    </Router>
  );
}

export default App;
