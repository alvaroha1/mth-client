import React, { Component } from 'react';
import Bulma from 'bulma'
import Map from './Map';
import ItemList from './ItemList';
import { connect } from 'react-redux';

class Display extends Component {
	constructor(props) {
		super(props)
		this.props.getHomes();
		this.state = {
			mapWidth: 300
		}
	}

	resize = () => {
		this.setState({ mapWidth: this.mapContainer.offsetWidth })
	}

	componentDidMount () {
		window.addEventListener("resize", this.resize);
		this.setState({mapWidth : this.mapContainer.offsetWidth})
	}

	getHomesFromDb = async () => {
		await this.props.getHomesFromDb()
	}

	refreshDisplay = ()=>{
    this.setState({ state: this.state });
}	
	render() {
		if(this.props.isMapOn) {
			return (
				<div ref={(r)=>this.mapContainer = r} className="Display">
					<Map width={this.state.mapWidth} refreshDisplay={this.refreshDisplay} itemList = {this.props.homes.homesList}/>
				</div>
			)
		} else {
			return (
				<div ref={(r)=>this.mapContainer = r} className="Display">
					<ItemList itemList = {this.props.homes.homesList}/>
				</div>
			)
		}
	}
}

const mapStateToProps = (state) => ({
	homes: state.filteredHomes,
	isMapOn: state.isMapOn
})

const mapDispatchToProps = (dispatch) => ({
  getHomes: () => dispatch({
    type: 'FILTER_HOMES',
    api: {
      endpoint: '/homes'
    }
	})
});

export default connect(mapStateToProps, mapDispatchToProps)(Display)
