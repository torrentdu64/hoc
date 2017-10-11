import { combineReducers } from 'redux';
import authenticate from './authenticate';

const rootReducer = combineReducers({
  authenticated: authenticateReducer
});

export default rootReducer;
