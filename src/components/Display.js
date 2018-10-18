import React, { Component } from 'react';
import Map from './Map';
import ItemList from './ItemList';
import { connect } from 'react-redux';
import { getFilterHomes } from '../redux/actions.js';


class Display extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mapWidthAndHeight: 300
		}
	}

	componentDidMount () {
		this.props.getFilterHomes();
		window.addEventListener("resize", this.resize);
		this.setState({mapWidthAndHeight : this.mapContainer.offsetWidth})
	}

	resize = () => {
		this.setState({ mapWidthAndHeight: this.mapContainer.offsetWidth })
	}

	refreshDisplay = () => {
    this.setState({ state: this.state });
	}

	render() {
		console.log('this.props.homes from display:',this.props.homes)
		if(this.props.isMapOn) {
			return (
				<div ref={(r)=>this.mapContainer = r} className="Display">
					<Map
						widthAndHeight={this.state.mapWidthAndHeight}
						refreshDisplay={this.refreshDisplay}
						itemsAndMapInfo = {this.props.filteredHomes}
					/>
				</div>
			)
		} else {
			return (
				<div ref={(r)=>this.mapContainer = r} className="Display">
					<ItemList
						itemList = {this.props.filteredHomes.homesList}
					/>
				</div>
			)
		}
	}
}

const mapStateToProps = (state) => ({
	filteredHomes: state.filteredHomes,
	isMapOn: state.isMapOn
})

const mapDispatchToProps = (dispatch) => ({
  getFilterHomes: () => dispatch(getFilterHomes())
});

export default connect(mapStateToProps, mapDispatchToProps)(Display)
