import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, /*Link*/ } from 'react-router-dom';

import { connect } from 'react-redux'
//import ReactDOM from 'react-dom'
//import { OverlayTrigger, Tooltip, } from 'react-bootstrap'

import Cv from "./Cv"
import Exchange from "./Exchange"
import Select from "./Select"




class MultiSelect extends Component {
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