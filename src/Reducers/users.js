import {ADD_USER} from "../actions";

const initialState = {
    // userId: "0dadd5bd-43a1-47a0-9405-adc2c699e94a",
    // photo: null,
    // subscription: {
    //     subscriptionId: "75801d9f-ec46-4d2e-a450-0d9dce4cd6b4",
    //     name: "Бесплатная",
    //     price: 0
    // },
    // name: "Бесплатная",
    // price: 0,
    // parameters: {},
    // customer: {
    //     customerId: "e796b984-d9b0-4e5c-9cb0-930515ad5972",
    //     name: "Петя",
    //     lastName: "Петров"
    // },
    // userRole: {
    //     userRoleId: "de2a8343-a536-4aea-93f1-27f392ec80e9",
    //     name: "ADMIN"
    // },
    // company: null,
    // email: "default@mail.ru",
    // passwordHash: "1jdsku13jsi123",
    // diets: {}
}


export default function createUsers(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            state = action.payload;
            return action.payload;
        default:
            return state;
    }
}