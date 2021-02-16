import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Contactus from "./Components/Contactus";
import Account from "./Components/Account";
import NavBar from "./Components/NavBar/NavBar";
import Table from "./Components/Table/Table";
import All from "./Components/All/All";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import Template from "./views/overview/Multiseries Chart";
import { Redirect }  from 'react-router-dom';

 

 
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      role: "",
      resize: 0,
      title: "Dashboard",
    };
    this.resize = this.resize.bind(this);
    this.title = this.title.bind(this);
  }
  resize(e) {
    this.setState({ resize: e });
  }
  title(e) {
    this.setState({ title: e });
  }
  render() {
    const token= window.localStorage.getItem('token');
   
    if(!token)return( <Login />)
      
    return (
      <div className="App">
       <NavBar
          title={this.state.title}
          tuggle={this.state.resize}
          resize={this.resize}
        />
        <All title={this.title} tuggle={this.state.resize} />
       
      </div>
    );
  }
}

export default App;
