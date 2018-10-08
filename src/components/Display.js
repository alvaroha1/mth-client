import React, { Component } from 'react'
// import Bulma from 'bulma'
import Map from './Map'
import ItemList from './ItemList'



class Display extends Component {
	render() {
		return (

			<div className="Display">
				<h1>Display </h1>
				<ItemList />
				<Map/>
			</div>
		)
	}
}

export default Display
