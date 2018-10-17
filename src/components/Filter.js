import React, { Component } from 'react';
import Bulma from 'bulma'
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Filter.css';
import qs from 'qs';

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
	step: 5,
	included: false,
	defaultValue: 0,
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
			latitude: null,
			longitude: null,
			radius: 50000,
		}
	this.setEstimatedPricePercentageDifference = debounce(this.setEstimatedPricePercentageDifference, 500);
	this.setSize = debounce(this.setSize, 500);
	this.setPrice = debounce(this.setPrice, 500);
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
		console.log(value.target.value);
		this.setState({city: value.target.value}, ()=>{
			this.getQuery();
		// mapInfo.find(city => this.state.city === city).latitude;
		// mapInfo.find(city => this.state.city === city).longitude;
		})
	}

	getQuery = () => {
		const filter = qs.stringify(this.state)
		this.props.filterHomes(filter);
		console.log(mapInfo);
	}

	// cityForMapInfo(){
	// 	mapInfo.find(city => this.state.city === city).latitude;
	// 	mapInfo.find(city => this.state.city === city).longitude;
	// }

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

	renderCitySelector = () => {
		if(!this.state.country) return null;
		if(this.state.country === "es") {
			return (
				<article className="message is-link">
  				<div className="message-header">
					<h4><strong>City</strong></h4>
  				</div>
  			<div className="message-body">
					<div className="field has-addons">
						<div className="control is-expanded">
							<div className="select is-fullwidth is-link">
								<select name="city" onChange={this.setCity}>
									<option >Select one</option>
									<option value="barcelona">Barcelona</option>
									<option value="valencia">Valencia</option>
									<option value="murcia">Murcia</option>
									<option value="malaga">Malaga</option>
									<option value="palma-de-mallorca">Palma de Mallorca</option>
								</select>
							</div>
						</div>
					</div>
  			</div>
			</article>
			)
		} else if (this.state.country === "it") {
			return (
				<article className="message is-link">
  				<div className="message-header">
					<h4><strong>City</strong></h4>
  				</div>
  				<div className="message-body">
						<div className="field has-addons">
							<div className="control is-expanded">
								<div className="select is-fullwidth is-link">
									<select name="city" onChange={this.setCity}>
										<option >Select one</option>
										<option value="roma">Roma</option>
										<option value="genova">Genova</option>
										<option value="naples">Naples</option>
										<option value="palermo">Palermo</option>
										<option value="cagliari">Cagliari</option>
									</select>
								</div>
							</div>
						</div>
  				</div>
				</article>
			)
		} else if (this.state.country === "fr") {
			return (
				<article className="message is-link">
  				<div className="message-header">
					<h4><strong>City</strong></h4>
  				</div>
  				<div className="message-body">
						<div className="field has-addons">
							<div className="control is-expanded">
								<div className="select is-fullwidth is-link">
									<select name="city" onChange={this.setCity}>
										<option >Select one</option>
										<option value="ajaccio">Ajaccio</option>
										<option value="marseille">Marseille</option>
										<option value="nice">Nice</option>
										<option value="cannes">Cannes</option>
										<option value="montpellier">Montpellier</option>
									</select>
								</div>
							</div>
						</div>
  				</div>
				</article>
			)
		}
	}

	render() {
		return (
			<div className="Filter">
			<article className="message is-link">
  			<div className="message-header">
				<h4><strong>Country</strong></h4>
  			</div>
  			<div className="message-body">
					<div className="field has-addons">
						<div className="control is-expanded">
							<div className="select is-fullwidth is-link">
								{this.renderCountrySelector()}
							</div>
						</div>
					</div>
  			</div>
			</article>
			
			{this.renderCitySelector()}

			<article className="message is-link">
  			<div className="message-header">
				<h4><strong>Discount(%)</strong></h4>
  			</div>
  			<div className="message-body">
				<div className="slider">
					<Slider 
						min={sliderDiscountSetup.min} 
						max={sliderDiscountSetup.max} 
						marks={discountMax} 
						included={sliderDiscountSetup.included} 
						defaultValue={sliderDiscountSetup.defaultValue} 
						onAfterChange={this.setEstimatedPricePercentageDifference}/>
				</div>
  			</div>
			</article>	

			<article className="message is-link">
  			<div className="message-header">
				<h4><strong>Price</strong></h4>
  			</div>
  			<div className="message-body">
				<div className="slider">
					<Range 
						min={rangePriceSetup.min} 
						max={rangePriceSetup.max} 
						marks={priceRange} 
						step={rangePriceSetup.step}
						included={rangePriceSetup.included}
						defaultValue={rangePriceSetup.defaultValue} 
						allowCross={rangePriceSetup.allowCross}
						onChange={this.setPrice}/>
				</div>
  			</div>
			</article>

			<article className="message is-link">
  			<div className="message-header">
				<h4><strong>Size</strong></h4>
  			</div>
  			<div className="message-body">
				<div className="slider">
					<Range 
						min={rangeSizeSetup.min} 
						max={rangeSizeSetup.max} 
						step={rangeSizeSetup.step}
						marks={sizeRange} 
						included={rangeSizeSetup.included} 
						defaultValue={rangeSizeSetup.defaultValue} 
						allowCross={rangeSizeSetup.allowCross}
						onChange={this.setSize}/>
				</div>
  			</div>
			</article>	

			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	filterHomes: (filter) => dispatch({
		type: 'FILTER_HOMES',
    api: {
      endpoint: '/homes?'+filter
    }
	})
});

export default connect(null, mapDispatchToProps)(Filter)




