const initialState = [];

export default function products (state = initialState, action) {
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