import React from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Happyhours } from './reducers/happyhours';
import { Businesses } from './reducers/businesses'; 
import { BrowserRouter } from 'react-router-dom';
import { InitialBusinessForm, InitialHappyhourForm } from './reducers/forms';
import './App.scss';

const store = createStore(
	combineReducers({
		happyhours: Happyhours,
		businesses: Businesses,
		...createForms({
			businessForm: InitialBusinessForm
		}),
		...createForms({
			happyhourForm: InitialHappyhourForm
		})
	}),
	applyMiddleware(thunk, logger)
);

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="App">
					<Main />
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
