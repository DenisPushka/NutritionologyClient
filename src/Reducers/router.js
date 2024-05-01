import { GO_TO_PAGE } from '../actions/index';

const initialState = {
    currentPage: '/*', // начальная страница
};

export default function router (state = initialState, action) {
    switch(action.type) {
        case GO_TO_PAGE:
            document.location = action.payload;
            return {
                ...state,
                currentPage: action.payload,
            };
        default:
            return state;
    }
}