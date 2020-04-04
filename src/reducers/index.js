import { combineReducers } from 'redux';
import data from './fetchAllRestaurants';

export default combineReducers({
    data: data
});