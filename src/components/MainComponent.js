import React, {Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import AddNewHappyHour from './AddNewHappyHourComponent';
import BusinessInfo from './BusinessInfoComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addBusiness, fetchBusinesses } from '../actions/ActionCreators';

const mapStateToProps = state => {
	return {
		businesses: state.businesses,
		happyhours: state.happyhours,
	};
};

const mapDispatchToProps = {
	addBusiness: (businessId, name, address, startTime, endTime) => (addBusiness(businessId, name, address, startTime, endTime)),
	fetchBusinesses: () => (fetchBusinesses()),
}

class Main extends Component {

	componentDidMount() {
		this.props.fetchBusinesses();
	}

	render() {
		const BusinessInfoWithId = ({match}) => {
			return (
				<BusinessInfo
					business={this.props.businesses.businesses.filter(business => business.id === +match.params.businessId)[0]}
					isLoading={this.props.businesses.isLoading}
					errMess={this.props.businesses.errMess}
					happyhour={this.props.happyhours.filter(happyhour => happyhour.businessId === +match.params.businessId )}
				/>
			);
		}

		return (
			<React.Fragment>
				<Header />

				<Switch>
					<Route exact path='/home' render={() => 
						<Home 
							businesses={this.props.businesses.businesses} 
							businessesLoading={this.props.businesses.isLoading}
							businessesErrMess={this.props.businesses.errMess}
							happyhours={this.props.happyhours} 
						/>
					} />
					<Route path='/add-new-happy-hour' render={() => <AddNewHappyHour addBusiness={this.props.addBusiness} />} />
					<Route path='/business/:businessId' component={BusinessInfoWithId} />
					<Redirect to='/home' />
				</Switch>
			</React.Fragment>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));