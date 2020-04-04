import { API_STATUS_SUCCESS, API_STATUS_ERROR, API_STATUS_IN_PROGRESS  } from './types';

export const apiInProgress = () => ({
    type: API_STATUS_IN_PROGRESS,
});

export const apiCallFailed = () => ({
    type: API_STATUS_ERROR,
});

export const apiCompleted = json => ({
    type: API_STATUS_SUCCESS,
    json: json.restaurants,
});

export function fetchPosts(cityName) {
    return function (dispatch) {
        dispatch(apiInProgress());
        return fetch(`http://opentable.herokuapp.com/api/restaurants?city=`+cityName)
        .then(
            response => response.json(),
            error => dispatch(apiCallFailed()),
        )
        .then((json) => {
            console.info(json);
            dispatch(apiCompleted(json));
        });
    };
}