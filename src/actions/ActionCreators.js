import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addBusiness = (businessId, name, address, startTime, endTime) => ({
	type: ActionTypes.ADD_BUSINESS,
	payload: {
		businessId,
		name,
		address,
		startTime,
		endTime
	}
});

export const fetchBusinesses = () => dispatch => {

	dispatch(businessesLoading());

	return fetch(baseUrl + 'businesses')
		.then(response => response.json())
		.then(businesses => dispatch(addBusinesses(businesses)));
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



export const addHappyhour = (happyhourId, type, description, deal, available) => ({
	type: ActionTypes.ADD_HAPPYHOUR,
	payload: {
		happyhourId,
		type,
		description,
		deal,
		available
	}
});

export const fetchHappyhours = () => dispatch => {

	dispatch(happyhoursLoading());

	return fetch(baseUrl + 'happyhours')
		.then(response => response.json())
		.then(happyhours => dispatch(addHappyhours(happyhours)));
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
})