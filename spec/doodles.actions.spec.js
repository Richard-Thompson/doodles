/* eslint-env node, mocha, chai */
import * as actions from '../src/actions/doodles.actions';
import * as types from '../src/types/doodles.types';
import {expect} from 'chai'; 

describe('doodles actions', () => {
    describe('getAllDoodles', () => {
        it('Request: returns the expected action', () => {
            const action = actions.getAllDoodlesRequest();
            expect(action).to.eql({
                type: types.GET_ALL_DOODLES_REQUEST
            });
        });

        it('Sucess: returns the expected action', () => {
            const action = actions.getAllDoodlesSuccess('doodles');
            expect(action).to.eql({
                type: types.GET_ALL_DOODLES_SUCCESS,
                doodles: 'doodles'
            });
        });

        it('Error: returns the expected action', () => {
            const action = actions.getAllDoodlesError('error');
            expect(action).to.eql({
                type: types.GET_ALL_DOODLES_ERROR,
                error: 'error'
            });
        });
    });
    describe('addSearchCriteria', () => {
        it('addSearchCriteria returns the expected action', () => {
            const action = actions.addSearchCriteria('Abstract')
            expect(action).to.eql({
                type: types.ADD_DOODLE_SEARCH_CRITERIA,
                criteria: 'Abstract'
            })
        })
    });
    describe('addSoldCriteria', () => {
        it('addSoldCriteria returns the expected action', () => {
            const action = actions.addSoldCriteria('Sold')
            expect(action).to.eql({
                type: types.SOLD_BOOLEAN_SEARCH_CRITERIA,
                criteria: 'Sold'
            })
        })
    });
    describe('addDateCriteria', () => {
        it('addDateCriteria returns the expected action', () => {
            const action = actions.addDateCriteria('Newest')
            expect(action).to.eql({
                type: types.DATE_BOOLEAN_SEARCH_CRITERIA,
                criteria: 'Newest'
            })
        })
    });
})