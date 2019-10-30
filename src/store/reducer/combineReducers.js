import { combineReducers } from 'redux';


import space from './space';
import login from './login'

//合并reducers
const reducers = combineReducers({
    ...space,
    ...login
});
export default reducers;








