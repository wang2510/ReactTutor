import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import simpleReducer from '../redux/reducers/simpleReducer';

export default function configureStore(initialState={simpleReducer: {reduxName: 'reduxName'}}) {
 return createStore(
   rootReducer,
   initialState,
   applyMiddleware()
 );
}