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

function Map() {
	return (
		<Row className="mapArea fixed-top">
			<Col className="p-0">
				<GoogleMap />
			</Col>
		</Row>
	);
}

function BusinessList({businesses, happyhours, isLoading, errMess}) {
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
		const happyhourFilter = happyhours.filter(happyhour => happyhour.businessId === busId);
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
	};

	const businessDetails = businesses.map(business => {
		return (
			<div key={business.id} className="businessContainer border bg-white p-2">
				<Row className="pb-0">
					<h3 className="col-9">{business.name}</h3>
					<p className="col text-right distance">0.2m away</p>
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
			<Map />
			<BusinessList 
				businesses={props.businesses}  
				isLoading={props.businessesLoading}
				errMess={props.businessesErrMess}
				happyhours={props.happyhours}
			/>
		</Container>
	);
}

export default Home;