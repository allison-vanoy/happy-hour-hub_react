import { BUSINESSES } from '../shared/businesses';
import * as ActionTypes from './ActionTypes';

export const Businesses = (state = BUSINESSES, action) => {
	switch(action.type) {
		default:
			return state;
	}
}