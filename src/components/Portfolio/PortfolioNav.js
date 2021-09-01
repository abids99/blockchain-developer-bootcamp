import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import "./Portfolio.css"


class PortfolioNav extends Component {
  render() {
    return (
       <header className="p-nav"> 
        <nav className="p-nav-p">
          <div className="p-nav-l"></div>
          <div className="p-nav-s" />
          <div className="p-nav-b">
            <ul>
              <li><NavLink exact activeClassName="current" to="/">Home</NavLink></li>
              <li><NavLink exact activeClassName="current" to="/Portfolio">Portfolio</NavLink></li>
              <li><NavLink exact activeClassName="current" to="/Portfolio/About">About</NavLink></li>
              <li><NavLink exact activeClassName="current" to="/Portfolio/Contect">Contect</NavLink></li>
              <li><NavLink exact activeClassName="current" to="/Projects">Projects</NavLink></li>
            </ul>
          </div>
          
        </nav>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
     
  }
}

export default connect(mapStateToProps)(PortfolioNav)
