import React, { Component } from 'react'
import Bulma from 'bulma'

function Item({url, thumbnail, pricePerSquareMeter,
 price, estimatedPrice, municipality}){
		return (
			<a href={url}>
			<div className = "tile is-ancestor">
				  <div className="tile is-5 is-parent">
						<div className="image level-left">
						<img src={`${thumbnail}`}/>
						</div>
				</div>
				<div className="tile is-parent">
	<p>Price per square meter: {pricePerSquareMeter}</p>
							<p>Price: {price}</p>
							<p>Our Estimated Price: {estimatedPrice}</p>
				</div>
			</div>
			</a>
		)
}

export default Item

