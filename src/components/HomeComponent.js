import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
//font awesome 5 imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { faBeer } from '@fortawesome/free-solid-svg-icons'

function Map() {
	return (
		<Row className="mapArea fixed-top">
			<Col className="p-0">
				<img id="googleMap" className="w-100" src="assets/images/map_img.jpg" alt="Google map placeholder" />
			</Col>
		</Row>
	);
}

function BusinessList(props) {
	const happyhourDetails = busId => { 
		const happyhourFilter = props.happyhours.filter(happyhour => happyhour.businessId === busId);
		return (
			<React.Fragment>
				{happyhourFilter.map(happyhour => { 
					return (
						<Row key={happyhour.id} className="specialsDetails">
							<FontAwesomeIcon className="col-2 pr-0 mt-1" icon={faHamburger} />
							<p className="col-6 pl-0 mb-1">{happyhour.name}</p>
							<p className="col text-left pl-0 mb-0">$ {happyhour.deal}</p>
						</Row>
					)
				})}
			</React.Fragment>
		)
	};

	const businessDetails = props.businesses.map(business => {
		return (
			<div key={business.id} className="businessContainer border bg-white p-2">
				<Row className="pb-0">
					<h3 className="col-9">{business.name}</h3>
					<p className="col text-right distance">0.2m away</p>
				</Row>

				{happyhourDetails(business.id)}

				<div class="row text-center seeMore">
					<div class="col">
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
			<BusinessList businesses={props.businesses} happyhours={props.happyhours} />
		</Container>
	);
}

export default Home;