import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route,  /*Link*/ } from 'react-router-dom';
// import { Route, Switch } from 'react-router-dom'
// import IpfsRouter from 'ipfs-react-router'


import { connect } from 'react-redux'
//import ReactDOM from 'react-dom'
//import { OverlayTrigger, Tooltip, } from 'react-bootstrap'

import Portfolio from "./Portfolio/Portfolio"
import Exchange from "./Exchange/Exchange"
import Select from "./Select"
import About from "./Portfolio/About"
import Contect from "./Portfolio/Contect"
import Projects from "./Projects"


class MultiSelect extends Component {
  render() {
    return (
      <Router>  
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
          <Route exact path='/Portfolio' component={Portfolio}></Route>
          <Route exact path='/Exchange' component={Exchange}></Route>
          <Route exact path='/' component={Select}></Route>
          <Route exact path='/Portfolio/About' component={About}></Route>
          <Route exact path='/Portfolio/Contect' component={Contect}></Route>
          <Route exact path='/Projects' component={Projects}></Route>          
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