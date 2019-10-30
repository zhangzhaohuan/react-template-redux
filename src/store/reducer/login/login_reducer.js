// import modifyState from '../modifyState';

export const initState = {
    islogin:false,
    status: '',
    loading:false,
    data:[]
};




export const login_reducer = (state = initState, action) => {
    switch (action.type) {
        case 'logined':
            return Object.assign({}, state, { islogin: true });
        case 'login_start':
            return Object.assign({}, state, action.payload);
        case 'login_end':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};






