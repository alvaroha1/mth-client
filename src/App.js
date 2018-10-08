import { Component } from 'react'
// import Bulma from 'bulma'
import * as React from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Display from './components/Display'
import Filter from './components/Filter'

class App extends Component {
	render() {
		return (

			<div className="App">
				<Navbar />
				<Display />
				<Filter />
			</div>
		)
	}
}

export default App
