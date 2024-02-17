import {Dish} from "../models";

const initialState = Dish;

export default function createDish(state = initialState, action) {
    if (action.type === 'TAKE_DISH') {
        sessionStorage.setItem('take_dish', JSON.stringify(action.payload));

        return JSON.parse(sessionStorage.getItem('take_dish'));
    }

    // if (action.type === 'UPDATE_USER') {
    //     sessionStorage.setItem('state', JSON.stringify(action.payload));
    // }

    const def = sessionStorage.getItem('take_dish');
    return def === 'undefined' ? Dish : JSON.parse(def);
}