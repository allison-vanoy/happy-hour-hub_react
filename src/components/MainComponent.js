import React, {Component} from 'react';
import Header from './HeaderComponent';
import Homepage from './HomepageComponent';
import AddNewHappyHour from './AddNewHappyHourComponent';
import BusinessPage from './BusinessPageComponent';
import { BUSINESSES } from '../shared/businesses';
import { HAPPYHOURS } from '../shared/happyhours';
import { Switch, Route } from 'react-router-dom';

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

				<Switch>
					<Route path="/add-new-happy-hour" component={AddNewHappyHour} />
					<Route path="/business/" render={() => <BusinessPage businesses={this.state.businesses} happyhours={this.state.happyhours} />} />
					<Route exact path="/" render={() => <Homepage businesses={this.state.businesses} happyhours={this.state.happyhours} />} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default Main;