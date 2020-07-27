import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Loading } from './LoadingComponent';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
//font awesome 5 imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import { faDirections } from '@fortawesome/free-solid-svg-icons';


function RenderIcon({dealType}) {
	const foodIcon = <i className="fa fa-2x fa-cutlery" />;
	const beerIcon = <FontAwesomeIcon icon={faBeer} />;

	if (dealType === "food") {
		return <div className="col-2 text-center pr-0 mt-1">{foodIcon}</div>;
	} else if (dealType === "drink") {
		return <div className="col-2 text-center fa-2x pr-0">{beerIcon}</div>;
	}
}

function RenderUpVoteResults({votes}) {
	if (votes > 0) {
		return (
			// # of people upvoted
			<p className="upVoted mb-0">{votes} {votes === 1 ? 'person has' : 'people have'} enjoyed this happy hour deal.</p>
		);
	}
	return <div></div>
}

function RenderDownVoteResults({votes}) {
	if (votes > 0) {
		return (
			// # of people downvoted
			<p className="downVoted mb-0">{votes} {votes === 1 ? 'person' : 'people'} said this deal is no longer available.</p>
		);
	}
	return <div></div>
}

class CarouselContainer extends Component {
    render() {
        return (
            <Carousel showThumbs={false} dynamicHeight={true}>
                <div>
                    <img src="../assets/images/food_1.jpg" />
                </div>
                <div>
                    <img src="../assets/images/food_2.jpg" />
                </div>
                <div>
                    <img src="../assets/images/food_3.jpg" />
                </div>
            </Carousel>
        );
    }
}

class BusinessInfo extends Component {

	constructor(props) {
		super(props); 
		
		this.state = {
			disableUpvote: false
		}
	}

	render() {
		const {business, happyhour, isLoading, errMess, updateVote} = this.props;

		if(isLoading) {
			return (
				<Container>
					<Row>
						<Loading />
					</Row>
				</Container>
			);
		}
		if(errMess) {
			return (
				<Container>
					<Row>
						<h4>{errMess}</h4>
					</Row>
				</Container>
			);
		}
		return (
			<Container fluid id="mainContainer" className="p-0">
				<Row>
					<Col>
						<CarouselContainer />
					</Col>
				</Row>

				<Row id="businessContent">
					<Col className="p-0">
						<div className="businessContainer bg-white p-2">
							{/* business name and distance */}
							<Row className="p-0">
								<h2 className="col-9">{business.name}</h2>
								{/* <p className="col text-right distance">0.2m away</p> */}
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
									<Button type="button" className="btn-link border-0" href={"tel:+"+business.phone}><i className="fa fa-lg fa-phone" /></Button>
								</Col>
								<Col xs={1} className="px-0">
									<Button type="button" className="btn-link border-0" href={"https://www.google.com/maps/search/?api=1&query=Google&query_place_id="+business.placeId} target="_blank" ><FontAwesomeIcon className="fa fa-lg " icon={faDirections} /></Button>
								</Col>
							</Row>
		
							{/* ratings */}
							{/* <Row className="mb-3 pt-1">
								<div className="col d-inline">
									<i className="fa fa-star pr-0 mt-1" />
									<i className="fa fa-star pr-0 mt-1" />
									<i className="fa fa-star pr-0 mt-1" />
									<i className="fa fa-star fa-star-half-o pr-0 mt-1" />
									<i className="fa fa-star fa-star-o pr-0 mt-1" />
								</div>
							</Row> */}

							{/* happy hour time */}
							<Row>
								<Col>
									<p className="text-center specials-border mx-auto specials-time">{business.startTime} - {business.endTime}</p>
								</Col>
							</Row>

							{/* list of happy hour specials */}
							{happyhour.map(happyhour => (
								<div className="happyHourSpecial" key={happyhour.id}>
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
											<RenderUpVoteResults votes={happyhour.upvote} />
											<RenderDownVoteResults votes={happyhour.downvote} />
										</Col>
									</Row>

									{/* confirm deal voting thumbs */}
									<Row>
										<h3 className="col-12 text-center">Confirm this deal</h3>
									</Row>
									<Row className="pb-3 mb-4 specials-border mx-auto">
										<Col className="text-right mr-3 thumbUp">
											<Button type="button" 
												disabled={this.props.disabledUpButtons.includes(happyhour.id) ? true : false}
												onClick={() => {
													if (!this.props.upVoteDisabled) {
														updateVote(happyhour.id, happyhour.upvote, 'upvote')
														this.props.addDisabledButton(happyhour.id, 'upvote')
													}
												}}
											>
												<i className="fa fa-2x fa-thumbs-up" />
											</Button>
										</Col>
										<Col className="text-left thumbDown">
											<Button type="button" 
												disabled={this.props.disabledDownButtons.includes(happyhour.id) ? true : false}
												onClick={() => {
													if (!this.props.downVoteDisabled) {
														updateVote(happyhour.id, happyhour.downvote, 'downvote')
														this.props.addDisabledButton(happyhour.id, 'downvote')
													}
												}}
												>
													<i className="fa fa-2x fa-thumbs-down" />
											</Button>
										</Col>
									</Row>
								</div>
							))}

						</div>
					</Col>
				</Row>

			</Container>
		)
	}
}

export default BusinessInfo;