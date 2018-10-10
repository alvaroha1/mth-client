import React, { Component } from 'react'
import Map from './Map'
import ItemList from './ItemList'
import { connect } from 'react-redux'

class Display extends Component {
	constructor(props) {
		super(props)
		this.props.getHomesFromDb();
		this.state = {
			isMapOn: this.props.isMapOn,
		}
	}
	
	getHomesFromDb = async () => {
		await this.props.getHomesFromDb()
	}

	render() {
		{console.log(this.state)}
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
				<ItemList />
				<Map/>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	mapToggle:state.isMapOn
})

const mapDispatchToProps = (dispatch) => ({
  getHomesFromDb: () => dispatch({
    type: 'GET_HOMES',
    api: {
      endpoint: '/homes'
    }
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Display)
