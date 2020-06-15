import React from 'react';
import { Form, Row, Col, Label, FormGroup, Input } from 'reactstrap';

function Searchbar() {

	return (
		<Row className="pb-3">
			<Col xs={8} md={5} xl={3} className="mx-auto">
				<div id="searcharea" className="bg-white d-lg-inline-block">
					<i className="fa fa-search ml-2 d-inline-block" />
					<Input className="border-0 d-inline-block" type="search" placeholder="search by zip" />
				</div>
			</Col>
		</Row>
	);

}

export default Searchbar;