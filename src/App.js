import React from 'react';
import './App.css';
import './components/Login.js';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Registration from './components/Registration.js'
import Login from './components/Login.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import Footer from './components/Footer'
import Footer from "./components/Footer";
import Header from "./components/Header"
function App() {
  return (
    <div >
      <h4>React App</h4>
      <Footer></Footer>
      <Header></Header>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/" component={Registration}></Route >
        {/* <Route exact path="/register" component={Login}></Route > */}

      </Switch>
    </div>
  );
}

export default App;
