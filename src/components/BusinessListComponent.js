import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class BusinessList extends Component {
	render() {
		const happyhourDetails = this.props.happyhours.map(happyhour => {
				return (
					<Row>
						<i className="fas fa-hamburger" />
						<p>{happyhour.name}</p>
						<p>$</p>
						<p>{happyhour.deal}</p>
					</Row>
				);
		});

		const businessDetails = this.props.businesses.map(business => {
			return (
				<div key={business.id} id="businessContainer">
					<Row>
						<h3>{business.name}</h3>
					</Row>
					{happyhourDetails}
				</div>
			);
		});

		return (
			<React.Fragment>
				{businessDetails}
			</React.Fragment>
		);
	}

}

export default BusinessList;