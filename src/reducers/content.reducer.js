import * as types from '../types/content.types'; 

const initialState = {
    loading: false,
    error: null,
    links: []
}

export default function contentReducer (state=initialState, action) {
    switch(action.type) {
        case types.GET_ALL_LINKS_REQUEST :
        return {...state, loading: true}

        case types.GET_ALL_LINKS_SUCCESS :
        return {...state,loading:false, links:action.links.items}    
        
        case types.GET_ALL_LINKS_ERROR :
        return {...state, loading:false, error: action.error}

        default :
        return state
        }
}