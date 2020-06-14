import React from 'react';
import { Form, Row, Col, Label, FormGroup } from 'reactstrap';

function Searchbar() {

	return (
		<div className="mx-auto">
			<div id="searcharea">
				<i className="fa fa-search" />
				<input type="search" placeholder="search by zip" />
			</div>
		</div>
	);

}

export default Searchbar;