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
							<div key={happyhour.id}>
								<p>{happyhour.name}</p>
								<p>$</p>
								<p>{happyhour.deal}</p>
							</div>
						)
					})}
				</React.Fragment>
			)
		};

		const businessDetails = this.props.businesses.map(business => {
			return (
				<div key={business.id} id="businessContainer">
					<Row>
						<h3>{business.name}</h3>
					</Row>
					{happyhourDetails(business.id)}
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