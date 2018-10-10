import React, { Component } from 'react'
import apiData from '../temp-mockdata'
import Bulma from 'bulma'

// console.log(apiData.homesList)
// const image = apiData.homesList
class Item extends Component {
	render() {
		return (
			<div className = "tile is-ancestor">
				<div className="Item">
					<div className='level'>
						<h1>Item</h1>
						<div className="image is-128x128 level-left">
							<img src={`${apiData.homesList[0].thumbnail}`}/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Item

