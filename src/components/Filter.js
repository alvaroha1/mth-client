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
const initialDiscount = 0;
const initialPrice = [0,2000000];
const initialSize = [0,200];
const initialCountry = 'es';

class Filter extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			discount: initialDiscount,
			price: initialPrice,
			size: initialSize,
			country: initialCountry,
		}
		this.setDiscount = debounce(this.setDiscount, 500);
		this.setSize = debounce(this.setSize, 500);
		this.setPrice = debounce(this.setPrice, 500);
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

	getQuery = () => {
		const filter = qs.stringify(this.state)
		this.props.filterHomes(filter);
		console.log(filter);
	}

	render() {
		return (
			<div className="Filter">
			
			<article className="message">
  			<div className="message-header">
				<h4><strong>Country</strong></h4>
  			</div>
  			<div className="message-body">
				<div className="field has-addons">
						<div className="control is-expanded">
							<div className="select is-fullwidth is-dark">
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

			<article className="message">
  			<div className="message-header">
				<h4><strong>Discount(%)</strong></h4>
  			</div>
  			<div className="message-body">
				<div className="slider">
					<Slider min={0} 
									max={100} 
									marks={discountMax} 
									included={false} 
									defaultValue={0} 
									onAfterChange={this.setDiscount}/>
				</div>
  			</div>
			</article>	

			<article className="message">
  			<div className="message-header">
				<h4><strong>Price</strong></h4>
  			</div>
  			<div className="message-body">
				<div className="slider">
					<Range min={0} 
									max={2000000} 
									marks={priceRange} 
									step={100000}
									included={false}
									defaultValue={[0,2000000]} 
									allowCross={false}
									onChange={this.setPrice}/>
				</div>
  			</div>
			</article>

			<article className="message">
  			<div className="message-header">
				<h4><strong>Size</strong></h4>
  			</div>
  			<div className="message-body">
				<div className="slider">
					<Range min={0} 
									max={200} 
									step={10}
									marks={sizeRange} 
									included={false} 
									defaultValue={[0,200]} 
									allowCross={false}
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