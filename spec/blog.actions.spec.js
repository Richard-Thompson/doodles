/* eslint-env node, mocha, chai */
import * as actions from '../src/actions/blog.actions';
import * as types from '../src/types/blog.types';
import {expect} from 'chai'; 

describe('blog actions', () => {
    describe('getAllArticles', () => {
        it('Request: returns the expected action', () => {
            const action = actions.getAllArticlesRequest();
            expect(action).to.eql({
                type: types.GET_ALL_ARTICLES_REQUEST
            });
        });

        it('Sucess: returns the expected action', () => {
            const action = actions.getAllArticlesSuccess('articles');
            expect(action).to.eql({
                type: types.GET_ALL_ARTICLES_SUCCESS,
                articles: 'articles'
            });
        });

        it('Error: returns the expected action', () => {
            const action = actions.getAllArticlesError('error');
            expect(action).to.eql({
                type: types.GET_ALL_ARTICLES_ERROR,
                error: 'error'
            });
        });
    });
})