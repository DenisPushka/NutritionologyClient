
export default function dishes (state = [] , action) {
    switch (action.type) {
        case 'SET_DISHES':
            state = action.payload;
            return action.payload;
        default:
            return state;
    }
}