import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Filter.css';
import qs from 'qs';

const discountMax = {
	0: <strong>0</strong>,
	100: <strong>+100%</strong>,
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

const estimatedPriceRange = {
	0: <strong>0</strong>,
	1000000: 1,
	2000000: <strong>2MM€</strong>,
}

const pricePerSquareMeterRange = {
	0: <strong>0</strong>,
	10000: 10,
	20000: <strong>20K€</strong>,
}

const initialState = {
	discount : 0,
	price : [0,2000000],
	size : [0,200],
	country : 'es',
	estimatedPriceRange : [0,2000000],
	pricePerSquareMeter : [0,20000],
}

const sliderDiscountSetup = {
	min: 0,
	max: 100,
	step: 10,
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

const rangeEstimatedPriceRangeSetup = {
	min: 0,
	max: 2000000,
	step: 100000,
	included: false,
	defaultValue: [0,2000000],
	allowCross: false,
}

const rangePricePerSquareMeterSetup = {
	min: 0,
	max: 20000,
	step: 1000,
	included: false,
	defaultValue: [0,20000],
	allowCross: false,
}

class Filter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			discount: initialState.discount,
			price: initialState.price,
			size: initialState.size,
			country: initialState.country,
			estimatedPriceRange: initialState.estimatedPriceRange,
			pricePerSquareMeter: initialState.pricePerSquareMeter,
		}
	this.setDiscount = debounce(this.setDiscount, 500);
	this.setSize = debounce(this.setSize, 500);
	this.setPrice = debounce(this.setPrice, 500);
	this.setEstimatedPriceRange = debounce(this.setEstimatedPrice, 500);
	this.setPricePerSquareMeter = debounce(this.setPricePerSquareMeter, 500);
	}

	getFilterHomes = async () => {
		await this.props.getFilterHomes()
	}

	setDiscount = (value) => {
		this.setState({discount: value}, ()=>{
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
		this.setState({country: value.target.value.value}, ()=>{
			this.getQuery();
		})
	}

	setEstimatedPrice = (value) => {
		this.setState({EstimatedPriceRange: value}, ()=>{
			this.getQuery();
		})
	}

	setPricePerSquareMeter = (value) => {
		this.setState({PricePerSquareMeter: value}, ()=>{
			this.getQuery();
		})
	}

	getQuery = () => {
		const filter = qs.stringify(this.state)
		this.props.filterHomes(filter);
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
								<select name="country" onChange={this.setCountry}>
									<option value="es">Spain</option>
									<option value="pt">Portugal</option>
									<option value="it">Italy</option>
								</select>
							</div>
						</div>
					</div>
  			</div>
			</article>

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
						onAfterChange={this.setDiscount}/>
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

			<article className="message is-link">
  			<div className="message-header">
				<h4><strong>Estimated Price</strong></h4>
  			</div>
  			<div className="message-body">
				<div className="slider">
					<Range 
						min={rangeEstimatedPriceRangeSetup.min} 
						max={rangeEstimatedPriceRangeSetup.max} 
						step={rangeEstimatedPriceRangeSetup.step}
						marks={estimatedPriceRange} 
						included={rangeEstimatedPriceRangeSetup.included} 
						defaultValue={rangeEstimatedPriceRangeSetup.defaultValue} 
						allowCross={rangeEstimatedPriceRangeSetup.allowCross}
						onChange={this.setEstimatedPrice}/>
				</div>
  			</div>
			</article>	

			<article className="message is-link">
  			<div className="message-header">
				<h4><strong>Price Per Square Meter</strong></h4>
  			</div>
  			<div className="message-body">
				<div className="slider">
					<Range 
						min={rangePricePerSquareMeterSetup.min} 
						max={rangePricePerSquareMeterSetup.max} 
						step={rangePricePerSquareMeterSetup.step}
						marks={pricePerSquareMeterRange} 
						included={rangeSizeSetup.included} 
						defaultValue={rangePricePerSquareMeterSetup.defaultValue} 
						allowCross={rangePricePerSquareMeterSetup.allowCross}
						onChange={this.setPricePerSquareMeter}/>
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