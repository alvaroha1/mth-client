import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Filter.css';
import qs from 'qs';
import { queryParameters } from '../redux/actions';
import SliderSelector from './SliderSelector'
import CitySelector from './CitySelector'
const mapInfo = require('./mapInfo.json');

const discountMax = {
	'-50': <strong>-50%</strong>,
	0: 0,
	50: <strong>+50%</strong>,
}

const sizeRange = {
	0: <strong>0</strong>,
	100: 100,
	200: <strong>200m</strong>,
}

const priceRange = {
	0: <strong>0</strong>,
	1000000: 1,
	2000000: <strong>2MM€</strong>,
}

const initialState = {
	estimatedPricePercentageDifference : 0,
	price : [0,2000000],
	size : [0,200],
	country : null,
	city : null,
}

const sliderDiscountSetup = {
	min: -50,
	max: 50,
	step: 10,
	included: false,
	defaultValue: [-50,50],
	allowCross: false,
}

const rangePriceSetup = {
	min: 0,
	max: 2000000,
	step: 100000,
	included: false,
	defaultValue: [0,2000000],
	allowCross: false,
}

const rangeSizeSetup = {
	min: 0,
	max: 200,
	step: 10,
	included: false,
	defaultValue: [0,200],
	allowCross: false,
}

class Filter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			estimatedPricePercentageDifference: initialState.estimatedPricePercentageDifference,
			price: initialState.price,
			size: initialState.size,
			country: initialState.country,
			city: initialState.city,
			centerLatitude: null,
			centerLongitude: null,
			radius: 50000,
			page: 1,
		}
	this.setEstimatedPricePercentageDifference = debounce(this.setEstimatedPricePercentageDifference, 500);
	this.setSize = debounce(this.setSize, 500);
	this.setPrice = debounce(this.setPrice, 500);
	}

	componentDidMount () {

	}

	getFilterHomes = async () => {
		await this.props.getFilterHomes()
	}

	setEstimatedPricePercentageDifference = (value) => {
		this.setState({estimatedPricePercentageDifference: value}, ()=>{
			this.getQuery();
		})
	}

	setPrice = (value) => {
		this.setState({price: value}, ()=>{
			this.getQuery();
		})
	}

	setSize = (value) => {
		this.setState({size: value}, ()=>{
			this.getQuery();
		})
	}

	setCountry = (value) => {
		this.setState({country: value.target.value}, ()=>{
			this.getQuery();
		})
	}

	setCity = (value) => {
		const { name, latitude, longitude } = mapInfo.mapInfo.filter(obj => obj.name === value.target.value )[0];
		this.setState({
			city: name,
			centerLatitude: latitude,
			centerLongitude: longitude,
		}, () => {
			this.getQuery();
		})
	}

	getQuery = () => {
		const filter = qs.stringify(this.state)
		this.props.filterHomes(filter);
		const qp = this.state;
		this.props.queryParameters(qp);
	}

	renderCountrySelector = () => {
		return (
			<select name="country" onChange={this.setCountry}>
				<option >Select one</option>
				<option value="es">Spain</option>
				<option value="fr">France</option>
				<option value="it">Italy</option>
			</select>
		)
	}

	render() {
		return (
			<div className="Filter">
				<CitySelector />
				<SliderSelector
					title='Price'
					min={rangePriceSetup.min}
					max={rangePriceSetup.max}
					marks={priceRange}
					step={rangePriceSetup.step}
					included={rangePriceSetup.included}
					defaultValue={rangePriceSetup.defaultValue}
					allowCross={rangePriceSetup.allowCross}
					onChange={this.setPrice}
				/>
				<SliderSelector
					title='Size'
					min={rangeSizeSetup.min}
					max={rangeSizeSetup.max}
					step={rangeSizeSetup.step}
					marks={sizeRange}
					included={rangeSizeSetup.included}
					defaultValue={rangeSizeSetup.defaultValue}
					allowCross={rangeSizeSetup.allowCross}
					onChange={this.setSize}
				/>
				<SliderSelector
					title='Discount %'
					min={sliderDiscountSetup.min}
					max={sliderDiscountSetup.max}
					step={sliderDiscountSetup.step}
					marks={discountMax}
					included={sliderDiscountSetup.included}
					defaultValue={sliderDiscountSetup.defaultValue}
					onChange={this.setEstimatedPricePercentageDifference}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	homes: state.filteredHomes,
	queryParameters: state.queryParameters
})

const mapDispatchToProps = (dispatch) => ({
	filterHomes: (filter) => dispatch({
		type: 'FILTER_HOMES',
    api: {
      endpoint: '/homes?'+filter
    }
	}),
	queryParameters: (qp) => dispatch(queryParameters(qp))

});

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
