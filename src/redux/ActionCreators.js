import * as ActionTypes from './ActionTypes';

export const addHappyhour = (InitialHappyhourForm) => ({
	type: ActionTypes.ADD_HAPPYHOUR,
	payload: InitialHappyhourForm
});

export const incrementThumb = (upvote) => ({
	type: ActionTypes.INCREMENT_THUMB,
	payload: upvote
});
