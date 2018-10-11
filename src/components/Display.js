import React, { Component } from 'react'
import Map from './Map'
import ItemList from './ItemList'
import { connect } from 'react-redux'

class Display extends Component {
	constructor(props) {
		super(props)
		this.props.getHomesFromDb();
		this.state = {
			homes: this.props.homes.homesList,
			mapWidth: 300
		}
	}

	resize = () => {
		this.setState({ mapWidth: this.mapContainer.offsetWidth })
	}

	componentDidMount () {
		window.addEventListener("resize", this.resize);
		console.log('width from display: ', this.mapContainer.offsetWidth);
		this.setState({mapWidth : this.mapContainer.offsetWidth})
	}


	getHomesFromDb = async () => {
		await this.props.getHomesFromDb()
	}

	refreshDisplay = ()=>{
		    // Force a render with a simulated state change
				console.log('refresh Display is called')
    this.setState({ state: this.state });
}	
	render() {
		console.log('in render', this.state.mapWidth)
		if(this.props.isMapOn) {
			return (
				<div ref={(r)=>this.mapContainer = r} className="Display">
					<Map width={this.state.mapWidth} refreshDisplay={this.refreshDisplay} />
				</div>
			)
		} else {
			return (
				<div className="Display">
					<h1>Display Item List</h1>
					<ItemList ItemList = {this.state.homes}/>
				</div>
			)
		}
	}
}

const mapStateToProps = (state) => ({
	homes: state.homes,
	isMapOn: state.isMapOn
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
