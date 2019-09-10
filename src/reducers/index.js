import { combineReducers } from 'redux';
import dogReducer from './exampleReducer';

const rootReducer = combineReducers({
  dogState: dogReducer
});

export default rootReducer;
