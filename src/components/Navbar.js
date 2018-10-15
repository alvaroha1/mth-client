import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<div className="Navbar">
				<nav className="navbar is-link" role="navigation" aria-label="main navigation">
					<div className="navbar-brand">
						<a className="navbar-item" href="https://bulma.io">
							<img src="" width="112" height="28"></img>
						</a>
						<a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</a>
					</div>
					<div id="navbarBasicExample" className="navbar-menu">
						<div className="navbar-start">
							<a className="navbar-item">
								Home
							</a>
							<a className="navbar-item">
								Rates
							</a>
							<div className="navbar-item has-dropdown is-hoverable">
								<a className="navbar-link">
									About Us
								</a>
								<div className="navbar-dropdown">
									<a className="navbar-item">
										About MTH
									</a>
									<a className="navbar-item">
										Team
									</a>
									<a className="navbar-item">
										ContactUs
									</a>
								</div>
							</div>
						</div>
						<div className="navbar-end">
							<div className="navbar-item">
								<div className="buttons">
									<a className="button is-light">
										<strong>Sign up</strong>
									</a>
									<a className="button is-light">
										<strong>Log in</strong>
									</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		)
	}
}

export default Navbar
