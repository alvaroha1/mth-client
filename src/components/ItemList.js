import React, { Component } from 'react'
import Item from './Item'

class ItemList extends Component {
	render() {
		return (
			<div className="ItemList">
			{this.props.}
				<h1>ItemList</h1>
				<Item />
				<Item />
				<Item />
			</div>
		)
	}
}

export default ItemList



