import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { notesReducer } from '../reducers/notesReducer';

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const reducers = combineReducers({
    notes: notesReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);
