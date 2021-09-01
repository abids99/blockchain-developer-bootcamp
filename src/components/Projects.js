import React, { Component } from 'react'
import './App.css'
//import Navbar from './Navbar'
//import Content from './Content'
import Exchange from './Exchange/Exchange'
//import Errr from './Errr'
import { connect } from 'react-redux'
// import {
//  loadWeb3,
//  loadAccount,
//  loadToken,
//  loadExchange
// } from '../store/interactions'

class Projects extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Exchange />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
 }
}

export default connect(mapStateToProps)(Projects)
