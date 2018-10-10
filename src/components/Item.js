import React, { Component } from 'react'
import apiData from '../temp-mockdata'
import Bulma from 'bulma'

class Item extends Component {
	render() {
		return (
			<a href={this.props.url}>
			<div className = "tile is-ancestor">
				<div className="Item">
					<div className='level'>
						<div className="image is-128x128 level-left">
							<img src={`${this.props.thumbnail}`}/>
							<p>Price per square meter: {this.props.pricePerSquareMeter}</p>
							<p>Price: {this.props.price}</p>
							<p>Our Estimated Price: {this.props.estimatedPrice}</p>
						</div>
					</div>
				</div>
			</div>
			</a>
		)
	}
}

export default Item

