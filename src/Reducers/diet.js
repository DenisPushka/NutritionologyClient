
export default function diet(state = "", action) {
    switch (action.type) {
        case 'SET_DIET':
            state = action.payload;
            return action.payload;
        default:
            return state;
    }
}