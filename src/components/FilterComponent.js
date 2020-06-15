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
						<Label className="filterLabel">Day of the Week</Label>
						<FormGroup check>
							<Label check>
								<Input type="checkbox" />
								Monday
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input type="checkbox" />
								Tuesday
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input type="checkbox" />
								Wednesday
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input type="checkbox" />
								Thursday
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input type="checkbox" />
								Friday
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input type="checkbox" />
								Saturday
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input type="checkbox" />
								Sunday
							</Label>
						</FormGroup>
					</Form>
				</Collapse>
			</React.Fragment>
		);
	}
}

export default Filter;