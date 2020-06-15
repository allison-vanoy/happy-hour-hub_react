import React, { Component } from 'react';
import { Form, Row, Col, Label, FormGroup, Input, Button, Collapse } from 'reactstrap';

class Filter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isFilterOpen: false
		}

		this.toggleFilter = this.toggleFilter.bind(this);
	}

	toggleFilter() {
		this.setState({
			isFilterOpen: !this.state.isFilterOpen
		});
	}
	
	render() {
		return (
			<React.Fragment>
				{/* filter icon */}
				<a type="button" onClick={this.toggleFilter} id="filterBtn" className="col-2 text-center mt-2 ml-0 d-lg-none">
					<i className="fa fa-filter" />
				</a>

				<Collapse isOpen={this.state.isFilterOpen}>
					<Form id="filterMenu">
					{/* Day of the Week filter section */}
						<FormGroup row>
							<Col xs={12}>
								<Label className="filterLabel">Day of the Week</Label>
							</Col>
							<Col xs={4}>
								<FormGroup check>
									<Label check>
										<Input type="checkbox" /> {' '}
										Monday
									</Label>
								</FormGroup>		
								<FormGroup check>
									<Label check>
										<Input type="checkbox" /> {' '}
										Tuesday
									</Label>
								</FormGroup>		
								<FormGroup check>
									<Label check>
										<Input type="checkbox" /> {' '}
										Wednesday
									</Label>
								</FormGroup>		
								<FormGroup check>
									<Label check>
										<Input type="checkbox" /> {' '}
										Thursday
									</Label>
								</FormGroup>
							</Col>
							<Col xs={4}>		
								<FormGroup check>
									<Label check>
										<Input type="checkbox" /> {' '}
										Friday
									</Label>
								</FormGroup>		
								<FormGroup check>
									<Label check>
										<Input type="checkbox" /> {' '}
										Saturday
									</Label>
								</FormGroup>		
								<FormGroup check>
									<Label check>
										<Input type="checkbox" /> {' '}
										Sunday
									</Label>
								</FormGroup>
							</Col>
						</FormGroup>

					{/* Type of Happy Hour filter section */}
						<FormGroup row>
							<Col xs={12}>
								<Label className="filterLabel">Type of Happy hour</Label>
							</Col>
							<Col xs={4}>
								<FormGroup check>
									<Label check>
										<Input type="checkbox" /> {' '}
										Food
									</Label>
								</FormGroup>
							</Col>
							<Col xs={4}>
								<FormGroup check>
									<Label check>
										<Input type="checkbox" /> {' '}
										Drink
									</Label>
								</FormGroup>
							</Col>
						</FormGroup>		

					{/* Ratings filter section */}
						<FormGroup row>
							<Col xs={12}>
								<Label className="filterLabel">Ratings</Label>
							</Col>
							<Col>
								<FormGroup check>
									<Label check>
										<Input type="checkbox" /> {' '}
										> 1 star
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="checkbox" /> {' '}
										> 2 star
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="checkbox" /> {' '}
										> 3 star
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="checkbox" /> {' '}
										> 4 star
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="checkbox" /> {' '}
										> 5 star
									</Label>
								</FormGroup>
							</Col>
						</FormGroup>

						{/* Apply Filters button */}
						<FormGroup row className="mb-4 mt-4">
							<Button id="applyFilters" type="submit" className="btn btn-lg mx0auto btn-block filterSubmit">Apply Filters</Button>	
						</FormGroup>	
					</Form>

				</Collapse>
			</React.Fragment>
		);
	}
}

export default Filter;