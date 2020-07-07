import React, {Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import AddNewHappyHour from './AddNewHappyHourComponent';
import BusinessInfo from './BusinessInfoComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { postBusiness, postHappyhour, fetchBusinesses, fetchHappyhours } from '../actions/ActionCreators';

const mapStateToProps = state => {
	return {
		businesses: state.businesses,
		happyhours: state.happyhours,
	};
};

const mapDispatchToProps = {
	postBusiness: (businessId, name, address, startTime, endTime) => (postBusiness(businessId, name, address, startTime, endTime)),
	postHappyhour: (happyhourId, type, description, deal, available) => (postHappyhour(happyhourId, type, description, deal, available)),
	fetchBusinesses: () => (fetchBusinesses()),
	fetchHappyhours: () => (fetchHappyhours()),
	resetBusinessForm: () => (actions.reset('businessForm')),
	resetHappyhourForm: () => (actions.reset('happyhourForm'))
}

class Main extends Component {

	componentDidMount() {
		this.props.fetchBusinesses();
		this.props.fetchHappyhours();
	}

	render() {
		const BusinessInfoWithId = ({match}) => {
			return (
				<BusinessInfo
					business={this.props.businesses.businesses.filter(business => business.id === +match.params.businessId)[0]}
					isLoading={this.props.businesses.isLoading}
					errMess={this.props.businesses.errMess}
					happyhour={this.props.happyhours.happyhours.filter(happyhour => happyhour.businessId === +match.params.businessId )}
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
							happyhours={this.props.happyhours.happyhours} 
							happyhoursLoading={this.props.happyhours.isLoading}
							happyhoursErrMess={this.props.happyhours.errMess}
						/>
					} />
					<Route path='/add-new-happy-hour' render={() => 
						<AddNewHappyHour 
							postBusiness={this.props.postBusiness}
							postHappyhour={this.props.postHappyhour} 
							resetBusinessForm={this.props.resetBusinessForm}
							resetHappyhourForm={this.props.resetHappyhourForm}
						/>
					} />
					<Route path='/business/:businessId' component={BusinessInfoWithId} />
					<Redirect to='/home' />
				</Switch>
			</React.Fragment>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));