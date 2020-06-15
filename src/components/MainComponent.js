import React, { Component } from 'react';
import Header from './HeaderComponent';
import Map from './MapComponent';
import BusinessList from './BusinessListComponent';
import { BUSINESSES } from '../shared/businesses';
import { HAPPYHOURS } from '../shared/happyhours';

//Main will handle any state
class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			businesses: BUSINESSES,
			happyhours: HAPPYHOURS
		};
	}
	

	render() {
		return (
			<React.Fragment>
				<Header />
				<Map />
				<BusinessList businesses={this.state.businesses} happyhours={this.state.happyhours} />
			</React.Fragment>
		);
	}

}

export default Main;