// import modifyState from '../modifyState';
import { Map, List } from 'immutable';


const initState = Map({
    islogin: false,
    status: '',
    loading: false,
    data: List([])
});;

export const login_reducer = (state = initState, action) => {
    switch (action.type) {
        case 'logined':
            return state.set('islogin', true);
        // return Object.assign({}, state, { islogin: true });
        case 'login_start':
            return state.merge(action.payload)
        // return Object.assign({}, state, action.payload);
        case 'login_end':
            return state.merge(action.payload)
        // return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};






