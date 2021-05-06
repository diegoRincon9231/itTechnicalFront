import {createStore} from 'redux';

const initialState = {
    selectMenu: null
}

const reducerInitial = (state = initialState, action) => {
    return state
}

export default createStore(reducerInitial);

