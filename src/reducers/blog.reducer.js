import * as types from '../types/blog.types'; 

const initialState = {
    articles:[],
    article:[],
    error: null,
    loading: true
}

export default function blogReducer (state=initialState, action) {
    switch(action.type) {
        case types.GET_ALL_ARTICLES_REQUEST :
        return {...state, loading: true}

        case types.GET_ALL_ARTICLES_SUCCESS :
        return {...state,loading:false, articles:action.articles}    
        
        case types.GET_ALL_ARTICLES_ERROR :
        return {...state, loading:false, error: action.error}

        default :
        return state
        }
}