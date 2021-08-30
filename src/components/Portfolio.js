import React, { Component } from 'react'
import { connect } from 'react-redux'
import PortfolioNav from './PortfolioNav'
import PortfolioContent from './PortfolioContent'

class Portfolio extends Component {
  render() {
    return (
      <div>
        <PortfolioNav />,
        <PortfolioContent />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Portfolio)