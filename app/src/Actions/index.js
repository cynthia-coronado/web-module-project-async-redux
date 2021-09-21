export const GET_DOG_FACTS_START = 'GET_DOG_FACTS_START'
export const GET_DOG_FACTS_SUCCESS = 'GET_DOG_FACTS_SUCCESS'
export const GET_DOG_FACTS_FAIL = 'GET_DOG_FACTS_FAIL'

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