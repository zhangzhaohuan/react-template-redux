import { Map, List } from 'immutable';

export const login = () => (dispatch, getState) => {
    dispatch({
        type: 'logined',
        payload: {
            name: 'zhangsan'
        }
    })
}

export const fetchLogin = () => (dispatch, getState) => {
    dispatch({
        type: 'login_start',
        payload: Map({
            loading: true,
            islogin: false,
            status: 'login_start'
        })
    })
    return new Promise((resolve, reject) => {
        resolve({ data: [{ id: 1, data: [1, 2], name: 'zhangsan' }, { id: 2, data: [3, 4], name: 'lisi' }] })
    }).then((data) => {
        dispatch({
            type: 'login_end',
            payload: Map({
                loading: false,
                islogin: true,
                status: 'login_start',
                data: List(data.data),
            })
        })
    })
}