import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getJoke } from "../actions/jokeActions";

const Joke = ({joke, fetching, error, dispatch}) => {

    useEffect(() => {
        dispatch(getJoke())
    }, [])


if(error) {
    return <h2>Error: {error}</h2>
    }

if(fetching) {
    return <h2>Thinkning about a new joke...</h2>
    }

const handleClick = () => {
    dispatch(getJoke())
    }

return(
    <>
    <div>
        <h2>{joke}</h2>
    </div>
    <button onClick={handleClick}>Tell me a joke!</button>
    </>
)    

}

const mapState = state => {
    return {
        joke: state.joke,
        fetching: state.fetching,
        error: state.error,
    }
}
export default connect(mapState)(Joke);