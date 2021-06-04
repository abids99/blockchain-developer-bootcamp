import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs, Tab } from 'react-bootstrap'
import {
	myFilledOrdersLoadedSelector,
	myFilledOrdersSelector,
	myOpenOrdersLoadedSelector,
	myOpenOrdersSelector
} from '../store/selectors'

class MyTransactions extends Component {
	render(){
		return (
			<div className="card bg-dark text-white">
				<div className="card-header">
					My Transactions
				</div>
				<div className="card-body">
					<Tabs defaultActiveKey="trades" className="bg-dark text-white">
						<Tab eventKey="trades" title="trades" className="bg-dark">
							<table className="table table-dark table-sm small">
								<tread>
									<tr>	
										<th>Time</th>
										<th>DAPP</th>
										<th>DAPP/ETH</th>
									</tr>
								</tread>

							</table>
						</Tab>
						<Tab eventKey="orders" title="orders">
							<table className="table table-dark table-sm small">
								<tread>
									<tr>	
										<th>Amount</th>
										<th>DAPP/ETH</th>
										<th>Cancel</th>
									</tr>
								</tread>

							</table>
						</Tab>
					</Tabs>
				</div>
			</div>					
		)
	}
}

function mapStateToProps(state) {
	console.log({
		myFilledOrders: myFilledOrdersSelector(state),
		myFilledOrdersL: myFilledOrdersSelector(state).length,
    showMyFilledOrders: myFilledOrdersLoadedSelector(state),
    myOpenOrders: myOpenOrdersSelector(state),
    myOpenOrdersL: myOpenOrdersSelector(state).length,
    showMyOpenOrders: myOpenOrdersLoadedSelector(state)
	})

	return {
    myFilledOrders: myFilledOrdersSelector(state),
    showMyFilledOrders: myFilledOrdersLoadedSelector(state),
    myOpenOrders: myOpenOrdersSelector(state),
    showMyOpenOrders: myOpenOrdersLoadedSelector(state)
  }
}

export default connect(mapStateToProps)(MyTransactions);
