import {SET_PRODUCTS} from "../actions";

const initialState = [];

export default function products (state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            state = action.payload;
            return action.payload;
        default:
            return state;
    }
}