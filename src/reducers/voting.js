import * as ActionTypes from '../actions/ActionTypes';

export const Voting = (state = [], action) => {

	switch (action.type) {
		case ActionTypes.ADD_VOTES:
			return {...state, ...action.payload}

		case ActionTypes.ADD_UPVOTE:
			const key = action.payload.id;
			return {...state, [key]: {...action.payload}}

		// case ActionTypes.ADD_DOWNVOTE:
			// return {...state}
		default:
			return state;
	}
};