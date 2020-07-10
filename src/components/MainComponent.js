import React, {Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import AddNewHappyHour from './AddNewHappyHourComponent';
import BusinessInfo from './BusinessInfoComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { postBusiness, postHappyhour, updateUpvote, fetchBusinesses, fetchHappyhours, fetchUpvotes } from '../actions/ActionCreators';

const mapStateToProps = state => {
	return {
		businesses: state.businesses,
		happyhours: state.happyhours,
	};
};

const mapDispatchToProps = {
	postBusiness: (businessId, name, address, startTime, endTime) => (postBusiness(businessId, name, address, startTime, endTime)),
	postHappyhour: (happyhourId, type, description, deal, available) => (postHappyhour(happyhourId, type, description, deal, available)),
	updateUpvote: (happyhourId, upvote) => (updateUpvote(happyhourId, upvote)),

	fetchBusinesses: () => (fetchBusinesses()),
	fetchHappyhours: () => (fetchHappyhours()),
	fetchUpvotes: () => (fetchUpvotes()),

	resetBusinessForm: () => (actions.reset('businessForm')),
	resetHappyhourForm: () => (actions.reset('happyhourForm'))
}

class Main extends Component {

	componentDidMount() {
		this.props.fetchBusinesses();
		this.props.fetchHappyhours();
		this.props.fetchUpvotes();
	}
	
	render() {
		const submitVote = (happyhourId, upvote) => {
			console.log(`submitVote entered in Main with happyhourId: ${happyhourId} and upvote: ${upvote} `);
			this.props.updateUpvote(happyhourId, upvote);
		}
		

		const BusinessInfoWithId = ({match}) => {
			return (
				<BusinessInfo
					business={this.props.businesses.businesses.filter(business => business.id === +match.params.businessId)[0]}
					isLoading={this.props.businesses.isLoading}
					errMess={this.props.businesses.errMess}
					happyhour={this.props.happyhours.happyhours.filter(happyhour => happyhour.businessId === +match.params.businessId )}
					submitVote={(happyhourId, upvote) => submitVote(happyhourId, upvote)}
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