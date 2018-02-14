import * as types from '../types/blog.types';
import client from '../contenful';

export function getAllArticles () {
    return function (dispatch) {
        dispatch(getAllArticlesRequest())
        client.getEntries({content_type:'blog'})
            .then((articles) =>{
                console.log(articles)
                dispatch(getAllArticlesSuccess(articles.items));
            })
            .catch((error) => {
                dispatch(getAllArticlesError(error));
            })
    }
}

export function getAllArticlesRequest () {
    return {
        type: types.GET_ALL_ARTICLES_REQUEST
    }
}

export function getAllArticlesSuccess (articles) {
    return {
        type: types.GET_ALL_ARTICLES_SUCCESS,
        articles: articles
    }
}

export function getAllArticlesError (error) {
    return {
        type: types.GET_ALL_ARTICLES_ERROR,
        error: error
    }
}