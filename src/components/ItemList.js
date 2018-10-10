import React, { Component } from 'react'
import Item from './Item'
import apiData from '../temp-mockdata'

const home = { thumbnail: 'https://img3.idealista.com/blur/WEB_LISTING/0/id.pro.es.image.master/92/fa/5d/601043036.jpg',
   	price: 995000,
   	size: 200,
   	province: 'Madrid',
   	municipality: 'La Moraleja',
   	country: 'es',
   	latitude: 40.5042226,
   	longitude: -3.6249665,
   	url: 'https://www.idealista.com/inmueble/40292291/',
   	estimatedPrice: 1044750,
   	estimatedPricePercentageDifference: 5,
   	pricePerSquareMeter: 4975 }

function ItemList({url, thumbnail, pricePerSquareMeter,
 price, estimatedPrice, municipality}){

	return (
		<div className="ItemList">
			{ /* {this.listItems} */}
		</div>
	)

	console.log('hello');

}


// <Item url={home.url} thumbnail={home.thumbnail} 
// 		pricePerSquareMeter={home.pricePerSquareMeter}
// 		price={home.price} estimatedPrice={home.estimatedPrice}
// 		municipality = {home.municipality}
// 		 />

export default ItemList



