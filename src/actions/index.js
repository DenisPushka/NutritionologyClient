export const GO_TO_PAGE = 'GO_TO_PAGE';
export const ADD_USER = 'ADD_USER';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_DISHES = 'SET_DISHES';
export const SET_DIET_ID = 'SET_DIET_ID';
export const SET_TAKE_DISH = 'SET_TAKE_DISH';
export const SET_MEAL_TIME = 'SET_MEAL_TIME';

export const goToPage = (page) => ({
    type: GO_TO_PAGE,
    payload: page,
});

export const addUser = (user) => ({
    type: ADD_USER,
    payload: user
});

export const addProducts = (products) => ({
    type: SET_PRODUCTS,
    payload: products
});

export const setDishes = (dishes) => ({
    type: SET_DISHES,
    payload: dishes
})

export const setDietId = (dietId) => ({
    type: SET_DIET_ID,
    payload: dietId
})

export const setTakeDish = (takeDish) => ({
    type: SET_TAKE_DISH,
    payload: takeDish
})

export const setMealTime = (mealTime) => ({
    type: SET_MEAL_TIME,
    payload: mealTime
})