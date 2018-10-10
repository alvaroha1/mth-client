import React, { Component } from 'react'

class Filter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			country:'',
			city:'',
			price:'',
			size:'',
		}
	}

	handleSlidersChange = (event) => {
    const target = event.target;
    const value = target.value;

    // this.setState({
    //   [name]: value
    // });
    console.log(event);
  }

	render() {
		return (
			<div className="Filter">
	
				<div className="Country">
					<h4><strong>Country</strong></h4>
					<div className="field has-addons">
						<div className="control is-expanded">
							<div className="select is-fullwidth">
								<select name="country">
									<option value="Spain">Spain</option>
									<option value="Portugal">Portugal</option>
									<option value="Italy">Italy</option>
								</select>
							</div>
						</div>
						<div className="control">
							<button name="country" type="submit" className="button is-primary">Choose</button>
						</div>
					</div>
				</div>

				<div className="City">
					<h4><strong>City</strong></h4>
					<div className="field is-grouped is-grouped-multiline">
						<p className="control">
							<a className="button">Barcelona</a>
						</p>
						<p className="control">
							<a className="button">Girona</a>
						</p>
						<p className="control">
							<a className="button">Tarragona</a>
						</p>
					</div>
				</div>

				<div>
					<h4><strong>Price</strong></h4>
					<input className="slider is-fullwidth is-medium" step="1" min="0" max="100" value="50" type="range" onChange={this.handleInputChange}></input>
				</div>

				<div>
					<h4><strong>Size</strong></h4>
					<input className="slider is-fullwidth is-medium" step="1" min="0" max="100" value="50" type="range" onChange={this.handleInputChange}></input>
				</div>
			
			</div>
		)
	}
}

export default Filter