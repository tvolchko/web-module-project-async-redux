import { NEW_JOKE, FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "../actions/jokeActions"

const initialState = {
    joke: '',
    fetching: false,
    error: ''

}

const jokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUCCESS: {
            return {
                ...state,
                joke: action.payload,
                fetching: false
            }
        }
        case FETCH_FAIL: {
            return {
                ...state,
                joke: '',
                fetching: false,
                error: action.payload
            }
        }
        case FETCH_START: {
            return {
                ...state,
                joke: '',
                fetching: true,
                error: '',
            }
        }
        default: {
            return state
        }
    }
}

export default jokeReducer