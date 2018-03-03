/* eslint-env node, mocha, chai */
import * as actions from '../../src/actions/doodles.actions';
import doodlesReducer from '../../src/reducers/doodles.reducer';
import { expect } from 'chai';

describe('doodles.reducer', function () {
  it('handles GET_ALL_DOODLES_REQUEST', function () {
    const action = actions.getAllDoodlesRequest();
    const initialState = {
      loading: false
    };

    const actual = doodlesReducer(initialState, action);
    const expected = {
      loading: true
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles GET_ALL_DOODLES_SUCCESS', function () {
    const action = actions.getAllDoodlesSuccess({items:['doodles']});
    const initialState = {
        loading: true,
        error:null,
        doodle: [],
        doodles:[],
        searchCriteria:[]
    };

    const actual = doodlesReducer(initialState, action);
    const expected = {
        loading: false,
        error:null,
        doodle: [],
        doodles:['doodles'],
        searchCriteria:[]
    };
    expect(actual).to.deep.equal(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles GET_ALL_DOODLES_ERROR', function () {
    const action = actions.getAllDoodlesError('error');
    const initialState = {
      loading: true,
      error:null
    };

    const actual = doodlesReducer(initialState, action);
    const expected = {
      loading: false,
      error: 'error'
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles ADD_DOODLE_SEARCH_CRITERIA', function () {
    const action = actions.addSearchCriteria('Abstract');
    const initialState = {
      searchCriteria:[]
    };

    const actual = doodlesReducer(initialState, action);
    const expected = {
      searchCriteria: ['Abstract']
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles ADD_DOODLE_SEARCH_CRITERIA when criteria is already present in searchCriteria array', function () {
    const action = actions.addSearchCriteria('Abstract');
    const initialState = {
      searchCriteria:['Abstract']
    };

    const actual = doodlesReducer(initialState, action);
    const expected = {
      searchCriteria: ['Abstract']
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles ADD_HOME_PAGE_SEARCH_TERM', function () {
    const action = actions.addHomePageSearchTerm('flowers');
    const initialState = {
      homePageSearchTerm:''
    };

    const actual = doodlesReducer(initialState, action);
    const expected = {
      homePageSearchTerm:'flowers'
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

});