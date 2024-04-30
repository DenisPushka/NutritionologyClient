const initialState = {login: '', password: '', user_role: 'user'};

export default function createUsers(state = initialState, action) {
    switch (action.type) {
        case 'ADD_USER':
            state = action.payload;
            return action.payload;
        default:
            return state;
    }
}