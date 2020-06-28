import React, {Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import AddNewHappyHour from './AddNewHappyHourComponent';
import BusinessInfo from './BusinessInfoComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		businesses: state.businesses,
		happyhours: state.happyhours
	}
}

class Main extends Component {

	render() {
		const BusinessInfoWithId = ({match}) => {
			return (
				<BusinessInfo
					business={this.props.businesses.filter(business => business.id === +match.params.businessId)[0]}
					happyhour={this.props.happyhours.filter(happyhour => happyhour.businessId === +match.params.businessId )}
				/>
			);
		}

		return (
			<React.Fragment>
				<Header />

				<Switch>
					<Route exact path='/home' render={() => <Home businesses={this.props.businesses} happyhours={this.props.happyhours} />} />
					<Route path='/add-new-happy-hour' component={AddNewHappyHour} />
					<Route path='/business/:businessId' component={BusinessInfoWithId} />
					<Redirect to='/home' />
				</Switch>
			</React.Fragment>
		);
	}
}

export default withRouter(connect(mapStateToProps)(Main));