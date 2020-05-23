import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import datesReducer from './bookingForm/dates.reducer.js';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    datesReducer,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;