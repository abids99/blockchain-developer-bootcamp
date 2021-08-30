import React, { Component } from 'react'
import { connect } from 'react-redux'
import CvNav from './CvNav'

class Cv extends Component {
  render() {
    return (
      <div>
        <CvNav />,
        <div className="content-cus">  
          <div className="horizontal-split"> 
            <div className="full  bg-light text-dark">
              <div className="center-cus-text">
                CV is not yet Deployed
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

export default connect(mapStateToProps)(Cv)