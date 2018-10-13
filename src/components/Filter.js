import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Filter.css';
import qs from 'qs';

const sizeFilterMax = {
	0: <strong>0</strong>,
	50: <strong>50</strong>,
	100: <strong>100</strong>,
	150: <strong>150</strong>,
	200: <strong>200m</strong>,
}

const priceFilterMax = {
	0: <strong>0</strong>,
	500: <strong>0.5</strong>,
	1000: <strong>1</strong>,
	1500: <strong>1.5</strong>,
	2000: <strong>2MM€</strong>,
}

class Filter extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			price:1000 * 1000,
			size:100,
			country:'Spain',
		}
		this.setSize= debounce(this.setSize, 500);
		this.setPrice= debounce(this.setPrice, 500);
	}

	getFilterHomes = async () => {
		await this.props.getFilterHomes()
	}

	setPrice = (value) => {
		this.setState({price: value * 1000}, ()=>{
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
		this.props.filterHomes();
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
				<h4><strong>Max Price</strong></h4>
  			</div>
  			<div className="message-body">
				<div className="slider">
					<Slider min={0} 
									max={2000} 
									marks={priceFilterMax} 
									included={false}
									defaultValue={1000} 
									onAfterChange={this.setPrice}/>
				</div>
  			</div>
			</article>

			<article className="message">
  			<div className="message-header">
				<h4><strong>Max Size</strong></h4>
  			</div>
  			<div className="message-body">
				<div className="slider">
					<Slider min={0} 
									max={200} 
									marks={sizeFilterMax} 
									included={false} 
									defaultValue={100} 
									onAfterChange={this.setSize}/>
				</div>
  			</div>
			</article>	
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	// filterHomes: state.homes,
})

const mapDispatchToProps = (dispatch) => ({
	filterHomes: () => dispatch({
		type: 'FILTER_HOMES',
    api: {
      endpoint: '/homes?'+this.filter
    }
	})
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter)


