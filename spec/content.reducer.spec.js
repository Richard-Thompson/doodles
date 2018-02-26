import * as actions from '../src/actions/content.actions';
import contentReducer from '../src/reducers/content.reducer';
import { expect } from 'chai';

describe('content.reducer', function () {
    it('handles GET_ALL_LINKS_REQUEST', function () {
        const action = actions.getAllLinksRequest();
        const initialState = {
            loading: false
        };

        const actual = contentReducer(initialState, action);
        const expected = {
            loading: true
        };
        expect(actual).to.eql(expected);
        expect(actual).to.not.equal(initialState);
    });

    it('handles GET_ALL_LINKS_SUCCESS', function () {
        const action = actions.getAllLinksSuccess({items:['links']});
        const initialState = {
            loading: true,
            error: null,
            links: []
        };

        const actual = contentReducer(initialState, action);
        const expected = {
            loading: false,
            error: null,
            links: ['links']
        };
        expect(actual).to.deep.equal(expected);
        expect(actual).to.not.equal(initialState);
    });

    it('handles GET_ALL_LINKS_ERROR', function () {
        const action = actions.getAllLinksError('error');
        const initialState = {
            loading: true,
            error: null
        };

        const actual = contentReducer(initialState, action);
        const expected = {
            loading: false,
            error: 'error'
        };
        expect(actual).to.eql(expected);
        expect(actual).to.not.equal(initialState);
    });
});