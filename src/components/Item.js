import React from 'react'
import Bulma, {tile} from 'bulma'
import '../App.css'

function Item({url, thumbnail, pricePerSquareMeter,
	price, estimatedPrice, size}){
	return (
		<a href={url}>
			<div className = "tile is-child is-9">
				<div className = "tile is-ancestor">
					<div className="tile is-5 is-parent">
						<div className="image tile is-child">
							<img src={`${thumbnail}`}/>
						</div>
					</div>
					<div className="tile is-parent">
						<div className="tile is-child is-12">
							<article className="message is-small is-fullwidth is-warning">
								<div className="message-header">
									<p>€{price}</p>
								</div>
								<div className="columns message-body">
									<div className="column">
										{size} m²
									</div>
									<div className="column">
									Our Estimation: €{estimatedPrice}
									</div>
								</div>
							</article>
						</div>
					</div>
				</div>
			</div>
		</a>
	)
}

export default Item

