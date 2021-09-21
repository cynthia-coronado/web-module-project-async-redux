import { GET_DOG_FACTS_START, GET_DOG_FACTS_SUCCESS, GET_DOG_FACTS_FAIL } from '../Actions'

const initialState = {
    facts: '',
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case(GET_DOG_FACTS_START):
        return({
            ...state,
            isFetching: true
        })
        case(GET_DOG_FACTS_SUCCESS):
        return({
            ...state,
            isFetching: false,
            facts: action.payload,
        })
        case(GET_DOG_FACTS_FAIL):
        return({
            ...state,
            isFetching: false,
            error: action.payload
        })
        default: 
        return state
    }
}