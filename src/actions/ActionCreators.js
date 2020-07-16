import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const postBusiness = (businessId, name, address, city, state, zip, startTime, endTime) => dispatch => {
	const newBusiness = {
		businessId,
		name,
		address,
		city,
		state,
		zip,
		startTime,
		endTime
	};

	return fetch(baseUrl + 'businesses', {
			method: "POST",
			body: JSON.stringify(newBusiness),
			headers: {
				"Content-type": "application/json"
			}
		})
		.then(response => {
			if (response.ok) {
				return response;
			} else {
				const error = new Error(`Error ${response.status}: ${response.statusText}`);
				error.response = response;
				throw error;
			}
		},
		error => { throw error; }
	)
	.then(response => response.json())
	.then(response => dispatch(addBusinesses(response)))
	.catch(error => {
		console.log('post business', error.message);
		alert(`This business could not be submitted\nError: ${error.message}`);
	})
};

export const fetchBusinesses = () => dispatch => {

	dispatch(businessesLoading());

	return fetch(baseUrl + 'businesses')
		.then(response => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(`Error ${response.status}: ${response.statusText}`);
					error.response = response;
					throw error;
				}
			},
			error => {
				const errMess = new Error(error.message);
				throw errMess;
			}
		)
		.then(response => response.json())
		.then(businesses => dispatch(addBusinesses(businesses)))
		.catch(error => dispatch(businessesFailed(error.message)));
};

export const businessesLoading = () => ({
	type: ActionTypes.BUSINESSES_LOADING
});

export const businessesFailed = errMess => ({
	type: ActionTypes.BUSINESSES_FAILED,
	payload: errMess
});

export const addBusinesses = businesses => ({
	type: ActionTypes.ADD_BUSINESSES,
	payload: businesses
});



export const postHappyhour = (happyhourId, type, description, deal, available) => dispatch => {
	const availableBoolToStr = [];
	
	const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	for (var i=0; i<daysOfWeek.length; i++) {
		if (available[i] === true) {
			availableBoolToStr.push(daysOfWeek[i]);
		}
	} 

	const newHappyhour = {
		happyhourId,
		type,
		description,
		deal,
		available: availableBoolToStr,
		upvote: 0,
		downvote: 0
	};

		return fetch(baseUrl + 'happyhours', {
			method: "POST",
			body: JSON.stringify(newHappyhour),
			headers: {
				"Content-type": "application/json"
			}
		})
		.then(response => {
			if (response.ok) {
				return response;
			} else {
				const error = new Error(`Error ${response.status}: ${response.statusText}`);
				error.response = response;
				throw error;
			}
		},
		error => { throw error; }
	)
	.then(response => response.json())
	.then(response => dispatch(addHappyhours(response)))
	.catch(error => {
		console.log('post happy hour', error.message);
		alert(`This happy hour could not be submitted\nError: ${error.message}`);
	})
};

export const fetchHappyhours = () => dispatch => {

	dispatch(happyhoursLoading());

	return fetch(baseUrl + 'happyhours')
			.then(response => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(`Error ${response.status}: ${response.statusText}`);
					error.response = response;
					throw error;
				}
			},
			error => {
				const errMess = new Error(error.message);
				throw errMess;
			}
		)
		.then(response => response.json())
		.then(happyhours => dispatch(addHappyhours(happyhours)))
		.catch(error => dispatch(happyhoursFailed(error.message)));
};

export const happyhoursLoading = () => ({
	type: ActionTypes.HAPPYHOURS_LOADING
});

export const happyhoursFailed = errMess => ({
	type: ActionTypes.HAPPYHOURS_FAILED,
	payload: errMess
});

export const addHappyhours = happyhours => ({
	type: ActionTypes.ADD_HAPPYHOURS,
	payload: happyhours
});


export const updateVote = (id, voteVal, voteType) => dispatch => {

	return fetch(baseUrl + 'happyhours/' + id, {
			method: "PATCH",
			body: JSON.stringify((voteType === 'upvote') ? {upvote: voteVal + 1} : {downvote: voteVal + 1}),
			headers: {
				"Content-type": "application/json"
			}
		})
		.then(response => {
			if (response.ok) {
				return response;
			} else {
				const error = new Error(`Error ${response.status}: ${response.statusText}`);
				error.response = response;
				throw error;
			}
		},
		error => { throw error; }
	)
	.then(response => response.json())
	.then(response => dispatch(changeVote(response)))
	.catch(error => {
		console.log('patch upvote', error.message);
		alert(`Upvote could not be saved\nError: ${error.message}`);
	})
};

export const changeVote = happyhour => ({
	type: ActionTypes.CHANGE_VOTE,
	payload: happyhour
});
