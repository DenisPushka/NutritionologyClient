import {SET_MEAL_TIME} from "../actions";

const initState = {
    mealTimeId: "",
    mealTime: ""
}

export default function mealTime (state = initState , action) {
    switch (action.type) {
        case SET_MEAL_TIME:
            state = action.payload;
            return action.payload;
        default:
            return state;
    }
}