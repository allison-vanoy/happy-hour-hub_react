import React from 'react';

function BusinessPage(props) {
	return (
		<React.Fragment>
			<h1>{props.businesses.name}</h1>
			{props.happyhours.map(happyhour => { 
				return (
					<div key={happyhour.id} className="specialsDetails">
						<i className="col-2 fas fa-hamburger pr-0 mt-1" />
						<p className="col-6 pl-0 mb-1">{happyhour.name}</p>
						<p className="col text-left pl-0 mb-0">$ {happyhour.deal}</p>
					</div>
				)
			})}
		</React.Fragment>
	)
}

export default BusinessPage;