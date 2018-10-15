import React from 'react'
import Item from './Item'
import Bulma, {tile} from 'bulma'

function ItemList({itemList}){
	const listItems = itemList.map((home)=>(
		<Item url={home.url} thumbnail={home.thumbnail}
			pricePerSquareMeter={home.pricePerSquareMeter}
			price={home.price} estimatedPrice={home.estimatedPrice}
		/>
	)
	)
	return (
		<div className="ItemList tile is-vertical is-parent">
			{ listItems }
		</div>
	)
}


export default ItemList
