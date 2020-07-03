import { createStore, combineReducers } from 'redux';
import { Businesses } from './businesses';
import { Happyhours } from './happyhours';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			businesses: Businesses,
			happyhours: Happyhours
		})
	);

	return store;
}