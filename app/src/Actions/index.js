import axios from "axios"

export const GET_DOG_FACTS_START = 'GET_DOG_FACTS_START'
export const GET_DOG_FACTS_SUCCESS = 'GET_DOG_FACTS_SUCCESS'
export const GET_DOG_FACTS_FAIL = 'GET_DOG_FACTS_FAIL'

export const getDogFacts = () => {
    // 1. start load
    // 2. do our axios request
    // 3. successful dispatch success
    // 4. fail dispatch fail

    return dispatch => {
        dispatch({type: GET_DOG_FACTS_START})
        axios
        .get('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=50')
        .then(response => {
            dispatch({type: GET_DOG_FACTS_SUCCESS, payload: response.data})
            console.log(response);
        })
        .catch(error => {
            dispatch({type: GET_DOG_FACTS_FAIL, payload: error.error})
        })
    }
}

export const getDogFactsStart = () => {
    return({
        type: GET_DOG_FACTS_START,
    })
}
export const getDogFactsSuccess = (facts) => {
    return({
        type: GET_DOG_FACTS_SUCCESS,
        payload: facts,
    })
}
export const getDogFactsFail = (error) => {
    return({
        type: GET_DOG_FACTS_FAIL,
        payload: error,
    })
}