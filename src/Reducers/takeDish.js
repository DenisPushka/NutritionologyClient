import {Dish} from "../models";
import {SET_TAKE_DISH} from "../actions";

export default function takeDish (state = Dish , action) {
    switch (action.type) {
        case SET_TAKE_DISH:
            state = action.payload;
            return action.payload;
        default:
            return state;
    }
}