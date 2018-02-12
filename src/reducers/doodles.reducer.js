import * as types from '../types/doodles.types'; 
import {criteriaInArray, sold, date} from '../helpers/helpers.doodles.reducer';

const initialState ={
    loading: false,
    error:null,
    doodles: [],
    doodle:[],
    searchCriteria:[],
    sold: false,
    date: 'Newest'
}

export default function doodlesReducer (state = initialState, action) {
    switch(action.type) {
        case types.GET_ALL_DOODLES_REQUEST :
        return {...state, loading: true}

        case types.GET_ALL_DOODLES_SUCCESS :
        return {...state,loading:false, doodles:action.doodles.items}    
        
        case types.GET_ALL_DOODLES_ERROR :
        return {...state, loading:false, error: action.error}

        case types.ADD_DOODLE_SEARCH_CRITERIA :
        return criteriaInArray(state, action)

        case types.SOLD_BOOLEAN_SEARCH_CRITERIA :
        return sold(state, action)

        case types.DATE_BOOLEAN_SEARCH_CRITERIA :
        return date(state, action)

        default :
        return state
        }
}