import React, { Component } from 'react'
import { connect } from 'react-redux'
//import ReactDOM from 'react-dom'
//import { OverlayTrigger, Tooltip, } from 'react-bootstrap'

class Cv extends Component {
  render() {
    return (
      <div className="content-cus">  
        <div className="horizontal-split"> 
          <div className="full  bg-light text-dark">
            <div className="center-cus-text">
              CV is not yet Deployed
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

export default connect(mapStateToProps)(Cv)