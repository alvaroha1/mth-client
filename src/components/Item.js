import React, { Component } from 'react'
import apiData from '../temp-mockdata'
import Bulma from 'bulma'

class Item extends Component {
	render() {
		return (
			<a href={this.props.url}>
			<div className = "tile is-ancestor">
				  <div className="tile is-5 is-parent">
						<div className="image level-left">
						<img src={`${this.props.thumbnail}`}/>
						</div>
				</div>
				<div className="tile is-parent">
				<h1>Home in {this.props.municipality}</h1>
	<p>Price per square meter: {this.props.pricePerSquareMeter}</p>
							<p>Price: {this.props.price}</p>
							<p>Our Estimated Price: {this.props.estimatedPrice}</p>
				</div>
			</div>
			</a>
		)
	}
}

export default Item

