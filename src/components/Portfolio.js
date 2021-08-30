import React, { Component } from 'react'
import { connect } from 'react-redux'
import PortfolioNav from './PortfolioNav'

class Portfolio extends Component {
  render() {
    return (
      <div>
        <PortfolioNav />,
        <div className="content-cus">  
          <div className="horizontal-split"> 
            <div className="full  bg-light text-dark">
              <div className="center-cus-text">
                Portfolio is not yet Deployed
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

export default connect(mapStateToProps)(Portfolio)