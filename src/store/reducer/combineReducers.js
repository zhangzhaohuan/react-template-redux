// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';





// import space from './space';
import login from './login'

//合并reducers
const reducers = combineReducers({
    ...login
});
export default reducers;








