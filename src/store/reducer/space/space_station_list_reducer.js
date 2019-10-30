import modifyState from '../modifyState';

export const initState = {
    autoCompleteOpts: {
        input: '',
        select: 'name'
    },
    cities: [],

    page: 1,
    per_page: 10,


    checkedList: [],
    listData: {
        //当前页
        "page": 1,
        //总页数
        "total_page": 1,
        //总条数
        "total": 0,
        //每页数量
        "per_page": 10,
        "data": [],
    }
};




export const space_station_list_reducer = (state=initState ,action) => {
    switch(action.type){
        case 'space_station_list':
            return modifyState(state,action);
        default:
            return state;
    }
};






