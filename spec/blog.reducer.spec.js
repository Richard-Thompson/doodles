/* eslint-env node, mocha, chai */
import * as actions from '../src/actions/blog.actions';
import blogReducer from '../src/reducers/blog.reducer';
import { expect } from 'chai';

describe('blog.reducer', function () {
  it('handles GET_ALL_ARTICLES_REQUEST', function () {
    const action = actions.getAllArticlesRequest();
    const initialState = {
      loading: false
    };

    const actual = blogReducer(initialState, action);
    const expected = {
      loading: true
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles GET_ALL_ARTICLES_SUCCESS', function () {
    const action = actions.getAllArticlesSuccess('articles');
    const initialState = {
        loading: true,
        error:null,
        articles:[],
        article:[]
    };

    const actual = blogReducer(initialState, action);
    const expected = {
        loading: false,
        error:null,
        articles:'articles',
        article: [],
    };
    expect(actual).to.deep.equal(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles GET_ALL_ARTICLES_ERROR', function () {
    const action = actions.getAllArticlesError('error');
    const initialState = {
      loading: true,
      error:null
    };

    const actual = blogReducer(initialState, action);
    const expected = {
      loading: false,
      error: 'error'
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });
});