import * as ActionTypes from '../actions/ActionTypes';

export const Happyhours = (state = {
		isLoading: true,
		errMess: null,
		happyhours: []
	}, action) => {
	switch (action.type) {
		case ActionTypes.ADD_HAPPYHOURS:
			return {...state, isLoading: false, errMess: null, happyhours: action.payload};
		case ActionTypes.HAPPYHOURS_LOADING:
			return {...state, isLoading: true, errMess: null, happyhours: []};
		case ActionTypes.HAPPYHOURS_FAILED:
			return {...state, isLoading: false, errMess: action.payload};
		case ActionTypes.ADD_HAPPYHOUR:
			const happyhour = action.payload;
			return {...state, happyhours: state.happyhours.concat(happyhour)};

		case ActionTypes.CHANGE_VOTE:
			const key = action.payload.id;
			const happyhourIndex = state.happyhours.findIndex(h => h.id === key);
			const currentHappyhours = state.happyhours;
			currentHappyhours[happyhourIndex] = action.payload;
			return {...state, happyhours: currentHappyhours};

		default:
			return state;
	}
}
