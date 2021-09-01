import React, { Component } from 'react'
import { connect } from 'react-redux'
import PortfolioNav from './PortfolioNav'

class Contect extends Component {
  render() {
    return (
      <div>
        <PortfolioNav />
        <div className="content-cus">  
          <div className="horizontal-split"> 
            <div className="full  bg-light text-dark">
              <div className="center-cus-text">
                You want to Contect me :) I will Update this.
              </div>
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

export default connect(mapStateToProps)(Contect)