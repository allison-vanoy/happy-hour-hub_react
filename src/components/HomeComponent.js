import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { GoogleMap } from './MapContainerComponent';
//font awesome 5 imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'

function RenderIcon({dealType}) {
	const foodIcon = <i className="fa fa-lg fa-cutlery" />;
	const beerIcon = <FontAwesomeIcon icon={faBeer} />;

	if (dealType === "food") {
		return <div className="col-2 text-center pr-0 mt-1">{foodIcon}</div>;
	} else if (dealType === "drink") {
		return <div className="col-2 text-center fa-lg pr-0">{beerIcon}</div>;
	}
}

function Map(props) {
	return (
		<Row className="mapArea fixed-top">
			<Col className="p-0">
				<GoogleMap businesses={props.businesses} />
			</Col>
		</Row>
	);
}

function BusinessList({dayOfWeek, dealType, businesses, happyhours, isLoading, errMess}) {
	if (isLoading) {
		return (
			<Row id="businessListContent">
				<Col lg={4} className="p-0">
					<Loading />
				</Col>
			</Row>
		);
	}
	if (errMess) {
		return (
			<Row id="businessListContent">
				<Col lg={4} className="p-0">
				<h4>{errMess}</h4>
				</Col>
			</Row>
		);
	}
	const happyhourDetails = busId => { 
		//find name of days that have true for checked state in filter
		const checkedFilterDays = [];
		dayOfWeek.map(checkedDay => {
			if (checkedDay.isChecked) {
				checkedFilterDays.push(checkedDay.name);
			}
		});

		//find which deal types (food/drink) have a true checked state in filter
		const checkedFilterTypes = [];
		dealType.map(checkedType => {
			if (checkedType.isChecked) {
				checkedFilterTypes.push(checkedType.name.toLowerCase());
			}
		});

		//get array of happy hours that have the passed business idea and match filter criteria
		const happyhourFilter = happyhours.filter(happyhour => (
			(happyhour.businessId === busId) && (happyhour.available.some(day => checkedFilterDays.includes(day))) && (checkedFilterTypes.includes(happyhour.type))
		));

		//if filter array isn't empty, return all matching happy hours for the business, 
		//otherwise return null so business knows not to display
		if (happyhourFilter.length > 0) {
			return (
				<React.Fragment>
					{happyhourFilter.map(happyhour => { 
						return (
							<Row key={happyhour.id} className="specialsDetails">
								<RenderIcon dealType={happyhour.type} />
								<p className="col-6 pl-0 mb-1">{happyhour.description}</p>
								<p className="col text-left pl-0 mb-0">$ {happyhour.deal}</p>
							</Row>
						)
					})}
				</React.Fragment>
			)
		}
		return null;
	};

	//return all businesses with names and specific happy hour information
	//if happy hour information returns null(didn't match filter criteria) don't return any business information
	const businessDetails = businesses.map(business => {
		if (happyhourDetails(business.id) === null) {
			return <div></div>
		}
		return (
			<div key={business.id} className="businessContainer border bg-white p-2">
				<Row className="pb-0">
					<h3 className="col-9">{business.name}</h3>
				</Row>

				{happyhourDetails(business.id)}

				<div className="row text-center seeMore">
					<div className="col">
						<Link to={`/business/${business.id}`}>see more...</Link>
					</div>
				</div>
			</div>
		);
	});

	return (
		<Row id="businessListContent">
			<Col lg={4} className="p-0">
				{businessDetails}
			</Col>
		</Row>
	);
}

function Home(props) {
	return (
		<Container fluid id="mainContainer" className="p-0">
			<Map businesses={props.businesses} />
			<BusinessList 
				dayOfWeek={props.dayOfWeek}
				dealType={props.dealType}

				businesses={props.businesses}  
				isLoading={props.businessesLoading}
				errMess={props.businessesErrMess}
				happyhours={props.happyhours}
			/>
		</Container>
	);
}

export default Home;