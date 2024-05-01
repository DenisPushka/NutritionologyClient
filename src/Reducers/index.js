import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import user from './users';
import products from "./products";
import diet from "./diet";
import takeDish from "./takeDish";
import router from "./router";
import mealTime from "./mealTime";


export const rootReducer = combineReducers({
    routing: routerReducer,
    user,
    products,
    diet,
    takeDish,
    router,
    mealTime
});