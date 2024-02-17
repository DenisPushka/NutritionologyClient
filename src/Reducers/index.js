import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import user from './users';
import takeDish from './takeDish'

export default combineReducers({
    routing: routerReducer,
    user,
    takeDish
});