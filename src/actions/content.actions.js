import * as types from '../types/content.types';
import client from '../contenful';

export function getAllLinks () {
    return function (dispatch) {
        dispatch(getAllLinksRequest())
        client.getEntries({content_type:'links'})
            .then((links) =>{
                dispatch(getAllLinksSuccess(links));
            })
            .catch((error) => {
                dispatch(getAllLinksError(error));
            })
    }
}

export function getAllLinksRequest () {
    return {
        type: types.GET_ALL_LINKS_REQUEST
    }
}

export function getAllLinksSuccess (links) {
    return {
        type: types.GET_ALL_LINKS_SUCCESS,
        links: links
    }
}

export function getAllLinksError (error) {
    return {
        type: types.GET_ALL_LINKS_ERROR,
        error: error
    }
}