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
		if(this.props.isMapOn) {
			return (
				<div ref={(r)=>this.mapContainer = r} className="Display">
					<Map
						widthAndHeight={this.state.mapWidthAndHeight}
						refreshDisplay={this.refreshDisplay}
						itemsAndMapInfo = {this.props.filterHomes}
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
