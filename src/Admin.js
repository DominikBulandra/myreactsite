import React, { Component } from 'react';
import {fire} from './config/Fire';
import Backend from './Backend';
import Login from './Login';

class Admin extends Component {
    constructor() {
      super();
      this.state = ({
        user: null,
      });
      this.authListener = this.authListener.bind(this);
    }
  
    componentDidMount() {
      this.authListener();
    }
  
    authListener() {
      fire.auth().onAuthStateChanged((user) => {
        //console.log(user);
        if (user) {
          this.setState({ user });
          localStorage.setItem('user', user.uid);
        } else {
          this.setState({ user: null });
          localStorage.removeItem('user');
        }
      });
    }
    render() {
      return (
        <div  className="container">{this.state.user ?  ( <Backend/>) : (<Login />)}</div>)
  }
  }

export default Admin;
