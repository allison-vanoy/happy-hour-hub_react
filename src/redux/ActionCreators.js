import * as ActionTypes from './ActionTypes';

export const addHappyhour = (businessId, type, description, deal, available) => ({
	type: ActionTypes.ADD_HAPPYHOUR,
	payload: {
		businessId: businessId,
		type: type,
		description: description,
		deal: deal,
		available: available
	}
});