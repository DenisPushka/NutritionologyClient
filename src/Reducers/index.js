import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import user from './users';
import products from "./products";
import diet from "./diet";
import takeDish from "./takeDish";
import dishes from "./dishes";


export const rootReducer = combineReducers({
    routing: routerReducer,
    user,
    products,
    diet,
    dishes,
    takeDish
});