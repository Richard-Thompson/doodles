import * as types from '../types/doodles.types';
import client from '../contenful';
import { ADD_HOME_PAGE_SEARCH_TERM } from '../types/doodles.types';

export function getAllDoodles () {
    return function (dispatch) {
        dispatch(getAllDoodlesRequest())
        client.getEntries({content_type:'doodles'})
            .then((doodles) =>{
                dispatch(getAllDoodlesSuccess(doodles));
            })
            .catch((error) => {
                dispatch(getAllDoodlesError(error));
            })
    }
}

export function getAllDoodlesRequest () {
    return {
        type: types.GET_ALL_DOODLES_REQUEST
    }
}

export function getAllDoodlesSuccess (doodles) {
    return {
        type: types.GET_ALL_DOODLES_SUCCESS,
        doodles: doodles
    }
}

export function getAllDoodlesError (error) {
    return {
        type: types.GET_ALL_DOODLES_ERROR,
        error: error
    }
}

export function addSearchCriteria (searchCriteria) {
    return {
        type: types.ADD_DOODLE_SEARCH_CRITERIA,
        criteria: searchCriteria
    }
}

export function addSoldCriteria (sold) {
    return {
        type:types.SOLD_BOOLEAN_SEARCH_CRITERIA,
        criteria: sold
    }
}

export function addDateCriteria (date) {
    return {
        type:types.DATE_BOOLEAN_SEARCH_CRITERIA,
        criteria: date
    }
}

export function addHomePageSearchTerm (searchTerm) {
    return {
        type: ADD_HOME_PAGE_SEARCH_TERM,
        searchTerm: searchTerm
    }
}