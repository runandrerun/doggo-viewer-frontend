import { combineReducers } from 'redux';
import dogReducer from './dogReducer';

const rootReducer = combineReducers({
  dogsState: dogReducer
});

export default rootReducer;
