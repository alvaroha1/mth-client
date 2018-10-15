import React from 'react'
import Item from './Item'

function ItemList({itemList}){
	const listItems = itemList.map((home, i)=>(
		<Item
			key={i} 
			url={home.url}
			thumbnail={home.thumbnail}
			pricePerSquareMeter={home.pricePerSquareMeter}
			price={home.price} 
			estimatedPrice={home.estimatedPrice}
		/>
	))

	return (
		<div className="ItemList">
			{ listItems }
		</div>
	)
}

export default ItemList
