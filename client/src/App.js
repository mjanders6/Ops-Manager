import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import './App.css'
import ReadOnly from './ReadOnly/pages/Home'
import User from './User/pages/Home'
import Admin from './Admin/pages/Home'
import Login from './pages/Login/Login'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: null
    }
    this.toggleLogin = this.toggleLogin.bind(this)
  }

  componentWillMount() {
    if (localStorage.getItem('userId') === null) {
      this.setState({
        isLoggedIn: false
      })
    } else {
      this.setState({
        isLoggedIn: true
      })
    }
  }

  toggleLogin() {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }

  componentDidMount() {
    console.log(this.state)
  }

  loggedin = () => {
    if (sessionStorage.getItem('userId')) {
      switch (sessionStorage.getItem('status')) {
        case '':
          return (
            <div>
              <Admin />
            </div>
          )
          break;
        case '0':
          return (
            <div>
              <ReadOnly />
            </div>
          )
          break;
        case '1':
          return (
            <div>
              <User />
            </div>
          )
          break;
        case '2':
          return (
            <div>
              <Admin />
            </div>
          )
          break;
        default:
          console.log("log in")
      }
    } else {
      return (
        <div>
          <Login />
        </div>
      )
    }
  }

  render() {

    return (

      <div>
        {this.loggedin()}
      </div>

    );

  };
};

export default App;