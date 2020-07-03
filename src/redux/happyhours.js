import { HAPPYHOURS } from '../shared/happyhours';
import * as ActionTypes from './ActionTypes';

export const Happyhours = (state = HAPPYHOURS, action) => {
	switch(action.type) {
		case ActionTypes.ADD_HAPPYHOUR:
			const happyhour = action.payload;
			happyhour.id = state.length;
			return state.concat(happyhour);
		default:
			return state;
	}
}