import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Filter.css';
import qs from 'qs';

const size = {
	0: <strong>0</strong>,
	200: <strong>200m</strong>,
}

const price = {
	0: <strong>0</strong>,
	2000: <strong>2MM€</strong>,
}

class Filter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			price:1000 * 1000,
			size:100,
		}
	}

	setPrice = (value) => {
		this.setState({price: value * 1000})
		this.getQuery();
	}

	setSize = (value) => {
		this.setState({size: value})
		this.getQuery();
	}

	getQuery = () => {
		const filter = qs.stringify(this.state)
		console.log(filter);
	}

	render() {
		return (
			<div className="Filter">

				<h4><strong>Max Price</strong></h4>
				<div className="slider">
					<Slider min={0} max={2000} marks={price} included={false} defaultValue={1000} onChange={this.setPrice}/>
				</div>

				<h4><strong>Max Size</strong></h4>
				<div className="slider">
					<Slider min={0} max={200} marks={size} included={false} defaultValue={100} onChange={this.setSize}/>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	filterHomes: () => dispatch({
		type: 'FILTER_HOMES',
		method: 'POST',
    api: {
      endpoint: '/homes?'+qs.stringify(this.state)
    }
	})
});

export default connect(null, mapDispatchToProps)(Filter)


