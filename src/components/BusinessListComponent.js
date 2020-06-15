import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class BusinessList extends Component {
	render() {
		const happyhourDetails = busId => { 
			const happyhourFilter = this.props.happyhours.filter(happyhour => happyhour.businessId === busId);
			return (
				<React.Fragment>
					{happyhourFilter.map(happyhour => { 
						return (
							<Row key={happyhour.id} className="specialsDetails">
								<i className="col-2 fas fa-hamburger pr-0 mt-1" />
								<p className="col-6 pl-0 mb-1">{happyhour.name}</p>
								<p className="col text-left pl-0 mb-0">$ {happyhour.deal}</p>
							</Row>
						)
					})}
				</React.Fragment>
			)
		};

		const businessDetails = this.props.businesses.map(business => {
			return (
				<div key={business.id} className="businessContainer border bg-white p-2">
					<Row className="pb-0">
						<h3 className="col-9">{business.name}</h3>
						<p className="col text-right distance">0.2m away</p>
					</Row>
					{happyhourDetails(business.id)}
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

}

export default BusinessList;