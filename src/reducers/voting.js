import * as ActionTypes from '../actions/ActionTypes';

export const Voting = (state = [], action) => {

	switch (action.type) {
		case ActionTypes.ADD_VOTES:
			return {...state, happyhours: action.payload}

		case ActionTypes.ADD_UPVOTE:
			const key = action.payload.id;
			return {...state, happyhours: {...state.happyhours, [key]: {...action.payload, upvote: action.payload.upvote + 1}}}

		// case ActionTypes.ADD_DOWNVOTE:
			// return {...state}
		default:
			return state;
	}
};