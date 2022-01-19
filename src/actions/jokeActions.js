export const NEW_JOKE = 'NEW_JOKE'
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
import axios from "axios";

export const getJoke = () => (dispatch) => {
    dispatch(fetchStart());
    axios.get('https://geek-jokes.sameerkumar.website/api?format=json')
    .then(resp => {
            dispatch(fetchSuccess(resp.data.joke))
            console.log(resp.data.joke)
    })
    .catch(err => {
        dispatch(fetchFail(err))
    })
}

export const fetchStart = () => {
    return({type: FETCH_START})
}

export const fetchSuccess = (joke) => {
    return({type:FETCH_SUCCESS, payload:joke})
}

export const fetchFail = (error) => {
    return({type:FETCH_FAIL, payload: error})
}