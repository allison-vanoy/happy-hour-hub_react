import * as ActionTypes from './ActionTypes';
import { BUSINESSES } from '../shared/businesses';

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

	setTimeout(() => {
		dispatch(addBusinesses(BUSINESSES));
	}, 1000)
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