import React, {Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import AddNewHappyHour from './AddNewHappyHourComponent';
import BusinessInfo from './BusinessInfoComponent';
import { BUSINESSES } from '../shared/businesses';
import { HAPPYHOURS } from '../shared/happyhours';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			businesses: BUSINESSES,
			happyhours: HAPPYHOURS
		};
	}

	render() {
		const BusinessInfoWithId = ({match}) => {
			return (
				<BusinessInfo
					business={this.state.businesses.filter(business => business.id === +match.params.businessId)[0]}
					happyhour={this.state.happyhours.filter(happyhour => happyhour.businessId === +match.params.businessId )}
				/>
			);
		}

		return (
			<React.Fragment>
				<Header />

				<Switch>
					<Route exact path='/home' render={() => <Home businesses={this.state.businesses} happyhours={this.state.happyhours} />} />
					<Route path='/add-new-happy-hour' component={AddNewHappyHour} />
					<Route path='/business/:businessId' component={BusinessInfoWithId} />
					<Redirect to='/home' />
				</Switch>
			</React.Fragment>
		);
	}
}

export default Main;