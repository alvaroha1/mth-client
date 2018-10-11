import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Filter.css';
import qs from 'qs';

const sizeFilterMax = {
	0: <strong>0</strong>,
	200: <strong>200m</strong>,
}

const priceFilterMax = {
	0: <strong>0</strong>,
	2000: <strong>2MM€</strong>,
}

class Filter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			price:1000 * 1000,
			size:100,
			country:'',
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

	setCountry = (value) => {
		this.setState({country: value})
		this.getQuery();
		console.log(value)
	}

	getQuery = () => {
		const filter = qs.stringify(this.state)
	}

	render() {
		return (
			<div className="Filter">
				<div className="Country">
					<h4><strong>Country</strong></h4>
					<div className="field has-addons">
						<div className="control is-expanded">
							<div className="select is-fullwidth">
								<select name="country">
									<option value="Spain">Spain</option>
									<option value="Portugal">Portugal</option>
									<option value="Italy">Italy</option>
								</select>
							</div>
						</div>
						<div className="control">
							<button name="country" type="submit" onClick={this.setCountry} className="button is-primary">Choose</button>
						</div>
					</div>
				</div>			

				<h4><strong>Max Price</strong></h4>
				<div className="slider">
					<Slider min={0} 
									max={2000} 
									marks={priceFilterMax} 
									included={false} 
									defaultValue={1000} 
									onChange={this.setPrice}/>
				</div>

				<h4><strong>Max Size</strong></h4>
				<div className="slider">
					<Slider min={0} 
									max={200} 
									marks={sizeFilterMax} 
									included={false} 
									defaultValue={100} 
									onChange={this.setSize}/>
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


