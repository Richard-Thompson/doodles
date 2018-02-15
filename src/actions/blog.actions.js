import * as types from '../types/blog.types';
import client from '../contenful';

export function getAllArticles () {
    return function (dispatch) {
        dispatch(getAllArticlesRequest())
        client.getEntries({content_type:'blog'})
            .then((articles) =>{
                dispatch(getAllArticlesSuccess(articles));
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

export function getArticle (articleId) {
    return function (dispatch) {
        dispatch(getArticleRequest())
        client.getEntry(articleId)
            .then((article) =>{
                console.log(article)
                dispatch(getArticleSuccess(article.fields));
            })
            .catch((error) => {
                dispatch(getArticleError(error));
            })
    }
}

export function getArticleRequest () {
    return {
        type: types.GET_ARTICLE_REQUEST
    }
}

export function getArticleSuccess (article) {
    return {
        type: types.GET_ARTICLE_SUCCESS,
        article: article
    }
}

export function getArticleError (error) {
    return {
        type: types.GET_ARTICLE_ERROR,
        error: error
    }
}