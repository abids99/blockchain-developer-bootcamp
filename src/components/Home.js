import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
// import ReactDOM from 'react-dom'
// import { OverlayTrigger, Tooltip, } from 'react-bootstrap'
// import Exchange from "./Exchange"

class Home extends Component {
  render() {
    return (
      <div>
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
        </header>,
        <div className="content-cus">  
          

          <div className="horizontal-split"> 
            <div className="center-cus-text text-height text-dark">
              Select one
            </div>
          </div>   

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Home)