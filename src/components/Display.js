import React, { Component } from 'react'
// import Bulma from 'bulma'
import Map from './Map'
import ItemList from './ItemList'
import { connect } from 'react-redux'


// const Display = this.state.bool ? Map : Results;

class Display extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isMapOn: this.props.isMapOn,
		}
	}
	
	render() {
		if(this.state.isMapOn) {
			return (

				<div className="Display">
					<h1>Display Map </h1>
					<Map/>
				</div>
			)
		} else {
			return (

				<div className="Display">
					<h1>Display Item List</h1>
					<ItemList />
				</div>
			)
		}
	}
}

const mapStateToProps = (state) => ({
	mapToggle:state.isMapOn
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Display)