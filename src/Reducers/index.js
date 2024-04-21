import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import user from './users';
import takeDish from './takeDish'

export const getProd = payload => ({
    type: 'GET_PRODUCTS',
    payload
})

export const setProducts = payload => ({
    type: 'SET_PRODUCTS',
    payload
})

export default function products (state = [], action) {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return state;
        case 'SET_PRODUCTS':
            state = action.payload;
            return action.payload;
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    routing: routerReducer,
    user,
    takeDish,

    products
});