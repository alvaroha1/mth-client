import React, { Component } from 'react'
// import Bulma from 'bulma'
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
		// this.setState
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

const mapDispatchToProps = (dispatch) => ({
  getHomesFromDb: () => dispatch({
    type: 'GET_HOMES',
    api: {
      endpoint: '/homes'
    }
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Display)




// const mapDispatchToProps = (dispatch) => ({
//   getHobbiesFromDatabase: () => dispatch({
//     type: 'DISCOVER',
//     api: {
//       endpoint: '/discover'
//     }
//   })
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Discover);