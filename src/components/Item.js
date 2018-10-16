import React, { Component } from 'react'
import Bulma, {tile} from 'bulma'
import '../App.css'

function Item({url, thumbnail, pricePerSquareMeter,
	price, estimatedPrice, municipality}){
	return (
		// <a href={url}>
		<div className = "tile is-child is-5">
			<div className = "tile is-parent">
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
		</div>
		// {/* </a> */}
	)
}

export default Item

