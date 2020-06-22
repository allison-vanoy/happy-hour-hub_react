import React from 'react';
import { Container, Row, Col } from 'reactstrap';
//font awesome 5 imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { faBeer } from '@fortawesome/free-solid-svg-icons'

function BusinessInfo({business, happyhour}) {
	return (
		<Container fluid id="mainContainer" className="p-0">
			<Row>
				<Col>
					<p className="text-center">Carousel placeholder</p>
				</Col>
			</Row>


			<h1>{business.name}</h1>
			{happyhour.map(happyhour => { 
				return (
					<div key={happyhour.id} className="specialsDetails">
						<FontAwesomeIcon className="col-2 fa-lg pr-0 mt-1" icon={faBeer} />
						<p className="col-6 pl-0 mb-1">{happyhour.name}</p>
						<p className="col text-left pl-0 mb-0">$ {happyhour.deal}</p>
					</div>
				)
			})}
		</Container>
	)
}

export default BusinessInfo;