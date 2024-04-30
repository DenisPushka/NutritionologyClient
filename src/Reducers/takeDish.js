import {Dish} from "../models";
import {ACTIONS_NAME} from "../constants/actionsName";

export default function takeDish (state = Dish , action) {
    switch (action.type) {
        case ACTIONS_NAME.SET_TAKE_DISH:
            state = action.payload;
            return action.payload;
        default:
            return state;
    }
}