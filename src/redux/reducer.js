import { BUSINESSES } from '../shared/businesses';
import { HAPPYHOURS } from '../shared/happyhours';

export const initialState = {
	businesses: BUSINESSES,
	happyhours: HAPPYHOURS
};

export const Reducer = (state = initialState, action) => {
	return state;
}