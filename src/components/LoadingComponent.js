import React from 'react';

export const Loading = () => {
	return (
		<div>
			<i className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary" />
			<p>looking for happy hours near you...</p>
		</div>
	);
}