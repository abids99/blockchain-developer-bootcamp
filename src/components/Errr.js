import React, { Component } from 'react'
import { connect } from 'react-redux'

class Errr extends Component {
  componentDidMount() {
    this.loadBlockchainData(this.props)
  }

  async loadBlockchainData(props) {
    
  }

  render() {
    return (
      <div className="content bg-light text-black">
      
        Contract not loaded please change to Ropsten Test Network
      </div>
      
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Errr)