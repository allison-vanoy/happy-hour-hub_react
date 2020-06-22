import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
//font awesome 5 imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import { faDirections } from '@fortawesome/free-solid-svg-icons';


function RenderIcon(props) {
	const foodIcon = <i className="fa fa-2x fa-cutlery" />;
	const beerIcon = <FontAwesomeIcon icon={faBeer} />;

	if (props.dealType === "food") {
		return <div className="col-2 text-center pr-0 mt-1">{foodIcon}</div>;
	} else if (props.dealType === "drink") {
		return <div className="col-2 text-center fa-2x pr-0">{beerIcon}</div>;
	}
}

function RenderUpVoteResults(props) {
	if (props.happyhour.upvote > 0) {
		return (
			// # of people upvoted
			<p className="upVoted mb-0">{props.happyhour.upvote} people have enjoyed this happy hour deal.</p>
		);
	}
	return <div></div>
}

function RenderDownVoteResults(props) {
	if (props.happyhour.downvote > 0) {
		return (
			// # of people downvoted
			<p className="downVoted mb-0">{props.happyhour.downvote} people said this deal is no longer available.</p>
		);
	}
	return <div></div>
}

function BusinessInfo({business, happyhour}) {
	return (
		<Container fluid id="mainContainer" className="p-0">
			<Row>
				<Col>
					<p className="text-center">Carousel placeholder</p>
				</Col>
			</Row>

			<Row id="businessContent">
				<Col className="p-0">
					<div className="businessContainer bg-white p-2">
						{/* business name and distance */}
						<Row className="p-0">
							<h2 className="col-9">{business.name}</h2>
							<p className="col text-right distance">0.2m away</p>
						</Row>

						{/* business address and contact icons */}
						<Row className="p-0 contactInfo">
							<p className="col-9 col-md-12 mb-0 address">
								{business.address}<br />
								{business.city}, {business.state} {business.zip}
							</p>
							<p className="col-9 mb-0">{business.phone}</p>
						</Row>
						<Row>	
							<Col xs={1} className="px-1">
								<Button type="button" className="btn-link border-0"><i className="fa fa-lg fa-phone" href={"tel:+"+business.phone} /></Button>
							</Col>
							<Col xs={1} className="px-0">
								<Button type="button" className="btn-link border-0"><FontAwesomeIcon className="fa fa-lg " icon={faDirections} href="https://goo.gl/maps/HxCf11Ykx5KqBdX39" /></Button>
							</Col>
						</Row>
	
						{/* ratings */}
						<Row className="mb-3 pt-1">
							<div class="col d-inline">
								<i className="fa fa-star pr-0 mt-1" />
								<i className="fa fa-star pr-0 mt-1" />
								<i className="fa fa-star pr-0 mt-1" />
								<i className="fa fa-star fa-star-half-o pr-0 mt-1" />
								<i className="fa fa-star fa-star-o pr-0 mt-1" />
							</div>
						</Row>

						{/* happy hour time */}
						<Row>
							<Col>
								<p className="text-center specials-border mx-auto specials-time">{business.startTime} - {business.endTime}</p>
							</Col>
						</Row>

						{/* list of happy hour specials */}
						{happyhour.map(happyhour => (
							<div className="happyHourSpecial">
								{/* happy hour deal information */}
								<Row className="specialsDetails">
									<RenderIcon dealType={happyhour.type} />

									<h3 className="col-6 pl-0 mb-1">{happyhour.description}</h3>
									<h3 className="col-3 text-left pl-0 mb-0">$ {happyhour.deal}</h3>
								</Row>

								{/* day(s) deal is available */}
								<Row>
									<Col className="offset-2 pl-0">
										<h4>
											Available: {happyhour.available.map(available => (
												<span>{available} </span>
											))}
										</h4>
									</Col>
								</Row>

								<Row className="voteTotal mb-3">
									<Col xs={12} className="offset-2 pl-2">
										<RenderUpVoteResults happyhour={happyhour} />
										<RenderDownVoteResults happyhour={happyhour} />
									</Col>
								</Row>

								{/* confirm deal voting thumbs */}
								<Row>
									<h3 className="col-12 text-center">Confirm this deal</h3>
								</Row>
								<Row className="pb-3 mb-4 specials-border mx-auto">
									<Col className="text-right mr-3 thumbUp">
										<i className="fa fa-2x fa-thumbs-up" />
									</Col>
									<Col className="text-left thumbDown">
										<i className="fa fa-2x fa-thumbs-down" />
									</Col>
								</Row>
							</div>
						))}

 					</div>
				</Col>
			</Row>

			{/* <h1>{business.name}</h1>
			{happyhour.map(happyhour => { 
				return (
					<div key={happyhour.id} className="specialsDetails">
						<FontAwesomeIcon className="col-2 fa-lg pr-0 mt-1" icon={faBeer} />
						<p className="col-6 pl-0 mb-1">{happyhour.name}</p>
						<p className="col text-left pl-0 mb-0">$ {happyhour.deal}</p>
					</div>
				)
			})} */}
		</Container>
	)
}

export default BusinessInfo;