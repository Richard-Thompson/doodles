import * as actions from '../../src/actions/content.actions';
import * as types from '../../src/types/content.types';
import {expect} from 'chai'; 

describe('content actions', () => {
    describe('getAllLinks', () => {
        it('Request: returns the expected action', () => {
            const action = actions.getAllLinksRequest();
            expect(action).to.eql({
                type: types.GET_ALL_LINKS_REQUEST
            });
        });

        it('Sucess: returns the expected action', () => {
            const action = actions.getAllLinksSuccess(['links']);
            expect(action).to.eql({
                type: types.GET_ALL_LINKS_SUCCESS,
                links: ['links']
            });
        });

        it('Error: returns the expected action', () => {
            const action = actions.getAllLinksError('error');
            expect(action).to.eql({
                type: types.GET_ALL_LINKS_ERROR,
                error: 'error'
            });
        });
    });
})