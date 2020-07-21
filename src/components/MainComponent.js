import React, {Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import AddNewHappyHour from './AddNewHappyHourComponent';
import BusinessInfo from './BusinessInfoComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { postBusiness, updateVote, fetchBusinesses, fetchHappyhours } from '../actions/ActionCreators';

const mapStateToProps = state => {
	return {
		businesses: state.businesses,
		happyhours: state.happyhours,
	};
};

const mapDispatchToProps = {
	postBusiness,
	updateVote,

	fetchBusinesses: () => (fetchBusinesses()),
	fetchHappyhours: () => (fetchHappyhours()),

	resetBusinessForm: () => (actions.reset('businessForm')),
	resetHappyhourForm: () => (actions.reset('happyhourForm'))
}

class Main extends Component {

	constructor(props) {
		super(props);

		//state to hold Filter Component changes and update Home Component list display
		this.state = {
			dayOfWeek: [
				{
					id: 0,
					name: 'Monday',
					isChecked: true
				},
				{
					id: 1,
					name: 'Tuesday',
					isChecked: true
				},
				{
					id: 2,
					name: 'Wednesday',
					isChecked: true
				},
				{
					id: 3,
					name: 'Thursday',
					isChecked: true
				},
				{
					id: 4,
					name: 'Friday',
					isChecked: true
				},
				{
					id: 5,
					name: 'Saturday',
					isChecked: true
				},
				{
					id: 6,
					name: 'Sunday',
					isChecked: true
				},
			],
			type: [
				{
					id: 0,
					name: 'Food',
					isChecked: true
				},
				{
					id: 1,
					name: 'Drink',
					isChecked: true
				},
			],
		}
	}

	handleFilterDayChange = (event) => {
		console.log('change was attempted');
		const index = event.target.getAttribute('index');

		let newArr = JSON.parse(JSON.stringify(this.state.dayOfWeek));;
		newArr[index].isChecked = !newArr[index].isChecked;

		this.setState({ dayOfWeek: newArr })
	}
	
	handleFilterTypeChange = (event) => {
		console.log(event);
		const index = event.target.getAttribute('index');

		let newArr = JSON.parse(JSON.stringify(this.state.type));;
		newArr[index].isChecked = !newArr[index].isChecked;

		this.setState({ type: newArr })
	}


	componentDidMount() {
		this.props.fetchBusinesses();
		this.props.fetchHappyhours();
	}
	
	render() {

		const submitVote = (happyhourId, voteVal, voteType) => {
			this.props.updateVote(happyhourId, voteVal, voteType);
		}
		

		const BusinessInfoWithId = ({match}) => {
			return (
				<BusinessInfo
					business={this.props.businesses.businesses.filter(business => business.id === +match.params.businessId)[0]}
					isLoading={this.props.businesses.isLoading}
					errMess={this.props.businesses.errMess}
					happyhour={this.props.happyhours.happyhours.filter(happyhour => happyhour.businessId === +match.params.businessId)}
					submitVote={(happyhourId, voteVal, voteType) => submitVote(happyhourId, voteVal, voteType)}
				/>
			);
		}

		return (
			<React.Fragment>
				<Header 
					dayOfWeek={this.state.dayOfWeek}
					dealType={this.state.type}
					handleFilterDayChange={this.handleFilterDayChange}
					handleFilterTypeChange={this.handleFilterTypeChange}	
				/>

				<Switch>
					<Route exact path='/home' render={() => 
						<Home 
							dayOfWeek={this.state.dayOfWeek}
							dealType={this.state.type}

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