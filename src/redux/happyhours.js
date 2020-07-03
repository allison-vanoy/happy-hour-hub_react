import { HAPPYHOURS } from '../shared/happyhours';
import { InitialHappyhourForm } from '../redux/forms';
import * as ActionTypes from './ActionTypes';

export const Happyhours = (state = HAPPYHOURS, action) => {
	switch(action.type) {
		default:
			return state;
	}
}

export const initialHappyhourForm = (state = InitialHappyhourForm, action) => {
	switch(action.type) {
		case ActionTypes.ADD_HAPPYHOUR:
			return state.concat(InitialHappyhourForm);
		default:
			return state;
	}
}

export const upvote = (state = HAPPYHOURS, action) => {
	switch(action.type) {
		case ActionTypes.INCREMENT_THUMB:
			return { upvote: state.upvote + 1 };
		default:
			return state;
	}
}