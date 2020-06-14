import React from 'react';
import { Form, Row, Col, Label, FormGroup, Input } from 'reactstrap';

function Filter() {

	return (
		<React.Fragment>
			{/* filter icon */}
			<a id="filterBtn">
				<i class="fa fa-filter" />
			</a>

			<Form>
				<Row>
					<Col>
						<Label></Label>
						<FormGroup>
							<div className="form-check-inline">
								<Input type="checkbox" id="monday" value="monday" />
								<Label htmlFor="monday">Monday</Label>
							</div>
							<div className="form-check-inline">
								<Input type="checkbox" id="tuesday" value="tuesday" />
								<Label htmlFor="tuesday">Tuesday</Label>
							</div>
							<div className="form-check-inline">
								<Input type="checkbox" id="wednesday" value="wednesday" />
								<Label htmlFor="wednesday">Wednesday</Label>
							</div>
							<div className="form-check-inline">
								<Input type="checkbox" id="thursday" value="thursday" />
								<Label htmlFor="thursday">Thursday</Label>
							</div>
							<div className="form-check-inline">
								<Input type="checkbox" id="friday" value="friday" />
								<Label htmlFor="friday">Friday</Label>
							</div>
							<div className="form-check-inline">
								<Input type="checkbox" id="saturday" value="saturday" />
								<Label htmlFor="saturday">Saturday</Label>
							</div>
							<div className="form-check-inline">
								<Input type="checkbox" id="sunday" value="sunday" />
								<Label htmlFor="sunday">Sunday</Label>
							</div>
						</FormGroup>
					</Col>
				</Row>
			</Form>
		</React.Fragment>
	);

}

export default Filter;