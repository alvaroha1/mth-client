import React, { Component } from 'react';
import Map from './Map';
import ItemList from './ItemList';
import { connect } from 'react-redux';

class Display extends Component {
	constructor(props) {
		super(props)
		this.props.getHomes();
		this.state = {
			homes: this.props.homes.homesList,
		}
	}
	
	getHomes = async () => {
		await this.props.getHomes()
	}

	render() {
		if(this.props.isMapOn) {
			return (
				<div className="Display">
					<Map/>
				</div>
			)
		} else {
			return (
				<div className="Display">
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
  getHomes: () => dispatch({
    type: 'GET_HOMES',
    api: {
      endpoint: '/homes'
    }
	})
});

export default connect(mapStateToProps, mapDispatchToProps)(Display)
