import React, { Component } from 'react'
import { connect } from 'react-redux'
// import ReactDOM from 'react-dom'
// import { OverlayTrigger, Tooltip, } from 'react-bootstrap'
// import Exchange from "./Exchange"

class Select extends Component {
  render() {
    return (
      <div className="content-cus">  
        

      <div className="horizontal-split"> 
          
          <div className="full  bg-light text-dark">
            <div className="center-cus-text">
              
            </div>
            <div className="center-button"> 
              <a href="#/Portfolio" className="button-styling">Portfolio</a>
            </div>
          </div>

          <div className="center-cus-text text-height text-dark">
            select one
          </div>

          <div className="full bg-light text-dark">
            <div className="center-cus-text">
            
            </div>
            <div className="center-button">  
              <a href="#/Exchange" className="button-styling">Project</a>
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

export default connect(mapStateToProps)(Select)