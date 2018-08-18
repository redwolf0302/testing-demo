import ApiService from '../../../dist/src/utils/ApiService';
import mockAxios from 'jest-mock-axios';

describe('ApiService correctly', () => {
    beforeEach(() => {
    });
    afterEach(() => {
        mockAxios.reset();
    });
    it('ApiService request', () => {
        let catchFn = jest.fn(), thenFn = jest.fn();
        ApiService('/user/list').then(thenFn).catch(catchFn);
        mockAxios.mockResponse({data: [{id: 1, name: 'Evan'}]});
        expect(thenFn).toHaveBeenCalledWith({
            "config": {},
            "data": [{"id": 1, "name": "Evan"}],
            "headers": {},
            "status": 200,
            "statusText": "OK"
        });
        expect(catchFn).not.toHaveBeenCalled();
    });

    it('ApiService request error', () => {
        let catchFn = jest.fn(), thenFn = jest.fn();
        ApiService('/user/list').then(thenFn).catch(catchFn);
        mockAxios.mockError(new Error('Network Error'));
        console.log(mockAxios.lastReqGet());
        expect(thenFn).not.toHaveBeenCalled();
        expect(catchFn).toHaveBeenCalledWith({});
    });

    it('ApiService request error with post', () => {
        let catchFn = jest.fn(), thenFn = jest.fn();
        ApiService('/user/list', null, {method:'post'}).then(thenFn).catch(catchFn);
        mockAxios.mockError(new Error('Network Error'));
        console.log(mockAxios.lastReqGet());
        expect(thenFn).not.toHaveBeenCalled();
        expect(catchFn).toHaveBeenCalledWith({});
    });
});