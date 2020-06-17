import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import Map from './components/MapComponent';
import BusinessList from './components/BusinessListComponent';
import AddNewHappyHour from './components/AddNewHappyHourComponent';
import BusinessPage from './components/BusinessPageComponent';
import { BUSINESSES } from './shared/businesses';
import { HAPPYHOURS } from './shared/happyhours';
import { Container } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			businesses: BUSINESSES,
			happyhours: HAPPYHOURS
		};
	}
	

	render() {
		const BusinessWithId = ({match}) => {
			return (
				<BusinessPage 
					business={this.props.businesses.filter(business => business.id === +match.params.businessId)[0]} 
					happyhours={this.props.happyhours.filter(happyhours => happyhours.businessId === +match.params.businessId)} 
				/>
			);
		}

		return (
			<React.Fragment>
				<Header />

				<Switch>
					<Route path="/add-new-happy-hour" component={AddNewHappyHour} />
					<Route path="/business/:id" component={BusinessWithId} />} />
					<Route exact path="/">
						{/* Home page content */}
						<Container fluid id="mainContainer" className="p-0">
							<Map />
							<BusinessList businesses={this.state.businesses} happyhours={this.state.happyhours} />
						</Container>
					</Route>
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;
