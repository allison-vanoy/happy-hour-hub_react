import { createStore, combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import { Businesses } from './businesses';
import { Happyhours, initialHappyhourForm, upvote } from './happyhours';
import { InitialBusinessForm } from './forms';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			businesses: Businesses,
			happyhours: Happyhours,
			initialHappyhourForm,
			upvote,
			...createForms({
				initialForm: InitialBusinessForm
			})
		})
	);

	return store;
}