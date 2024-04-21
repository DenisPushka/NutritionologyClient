const initialState = [];

export default async function products(state = initialState, action) {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return state;
        case 'SET_PRODUCTS':
            return action.payload;
        default:
            return state;
    }
}