import React, {Component} from 'react';
import { Link } from 'react-router-dom';

function BusinessPage({happyhours}) {
	return (
		<React.Fragment>
			<h1>Business Page</h1>
			<h1>{happyhours.name}</h1>
		</React.Fragment>
	)
}

export default BusinessPage;