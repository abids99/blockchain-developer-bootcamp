import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route,  /*Link*/ } from 'react-router-dom';
import { createHashHistory } from 'history';
// import { Route, Switch } from 'react-router-dom'
// import IpfsRouter from 'ipfs-react-router'


import { connect } from 'react-redux'
//import ReactDOM from 'react-dom'
//import { OverlayTrigger, Tooltip, } from 'react-bootstrap'

import Cv from "./Cv"
import Exchange from "./Exchange"
import Select from "./Select"




class MultiSelect extends Component {
  history = createHashHistory({
    basename: "", // The base URL of the app (see below)
    hashType: "slash", // The hash type to use (see below)
    // A function to use to confirm navigation with the user (see below)
    getUserConfirmation: (message, callback) => callback(window.confirm(message)),
  });

  render() {
    return (
      <Router>  
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
          <Route exact path='/Cv' component={Cv}></Route>
          <Route exact path='/Exchange' component={Exchange}></Route>
          <Route exact path='/' component={Select}></Route>
        </Switch>
      </Router>  
    );
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(MultiSelect)