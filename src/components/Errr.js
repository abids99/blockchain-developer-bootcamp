import React, { Component } from 'react'
import { connect } from 'react-redux'
import { OverlayTrigger, Tooltip, } from 'react-bootstrap'

class Errr extends Component {
  render() {
    return (
      <div className="content-cus">  
        <div className="horizontal-split">	
          
          <div className="full bg-light text-dark">
        		<div>
                  
            </div>
            
          </div>

          <div className="full bg-light text-dark">
            <div>
        			   
          	</div>
          	
        	</div>      
       
        </div>

       <div className="horizontal-split"> 
          
          <div className="full  bg-light text-dark">
            <div className="center-cus-text">
              If Metamask not installed please install metamask      
            </div>
            <div className="center-button"> 
              <a href="https://metamask.io/"><input type="button" bg="dark" text="info" value='Click Here'></input></a>
            </div>
          </div>

          <div className="full bg-light text-dark">
            <div className="center-cus-text">
              if Exchange is not loaded please change to Ropsten Test Network      
            </div>
            <div className="center-button-r">  
              <a href="https://docs.cargo.build/guides/changing-your-network-with-metamask"><input type="button" bg="dark" text="info" value='Click Here'></input></a>
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

export default connect(mapStateToProps)(Errr)