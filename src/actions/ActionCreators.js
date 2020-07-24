import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const postBusiness = (
	businessId, placeId, name, address, city, state, zip, coordinates, startTime, endTime,
	happyhourId, happyhours
) => dispatch => {
	//both business and happy hour values are passed to action but
	//only business information is dispatched to addBusiness reducer, then generated id returned to 
	//dispatch with postHappyhour action using the happyhour values
	const newBusiness = {
		businessId,
		placeId,
		name,
		address,
		city,
		state,
		zip,
		coordinates,
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
	.then(response => dispatch(addBusiness(response)))
	.then(response => dispatch(postHappyhour(response.payload.id, happyhourId, happyhours)))
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

export const addBusiness = business => ({
	type: ActionTypes.ADD_BUSINESS,
	payload: business
});


const postHappyhour = (businessId, happyhourId, happyhours) => dispatch => {
	//multiple happy hours can be submitted with each form,
	//run dispatch for each individually so they concat as an object instead of a sub array
	happyhours.forEach(h => {
		let newHappyhour = {
			happyhourId,
			description: h.itemDesc,
			deal: h.discount,
			type: h.dealType,
			available: h.available,
			upvote: 0,
			downvote: 0,
			businessId: businessId
		}

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
		.then(response => dispatch(addHappyhour(response)))
		.catch(error => {
			console.log('post happy hour', error.message);
			alert(`This happy hour could not be submitted\nError: ${error.message}`);
		})
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

export const addHappyhour = happyhour => ({
	type: ActionTypes.ADD_HAPPYHOUR,
	payload: happyhour
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
