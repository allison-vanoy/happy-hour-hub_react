import React from 'react';
import { Row, Col } from 'reactstrap';

function Map() {

	return (
		<React.Fragment>
			<Row class="mapArea fixed-top">
				<Col class="p-0">
					<img id="googleMap" class="w-100" src="assets/images/map_img.jpg" alt="Google map placeholder" />
				</Col>
			</Row>
		</React.Fragment>
	);

}

export default Map;