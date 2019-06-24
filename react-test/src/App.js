import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home/home';
import Navigation from './components/Navigation';
import Profile from './home/profile/profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

 class App extends Component{
   render(){
     return (
       <div>
        <Navigation />
        <Router>
        <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path="/profile" component={Profile}/>
        </Switch>
        </Router>
       </div>
     );
   }

}

export default App;
