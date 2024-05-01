import {SET_DIET_ID, SET_DISHES} from "../actions";

const initialState = {
    dietId: ""
};

export default function diet(state = initialState, action) {
    switch (action.type) {
        case SET_DISHES:
            return {
                ...state,
                dishes: action.payload
            }
        case SET_DIET_ID:
            return {
                ...state,
                dietId: action.payload
            }
        default:
            return state;
    }
}