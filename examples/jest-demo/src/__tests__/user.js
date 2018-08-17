// jest.mock('../user/user');
import getUserName from '../user/user'

describe('user correctly', () => {
    test('user', () => {
        let name = getUserName('evan', ()=>{});
        expect(name).toEqual('EVAN');
        const myMockFn = jest.fn(cb => cb(null, true))
            .mockImplementationOnce(cb => cb(null, true))
            .mockImplementationOnce(cb => cb(null, false));
        myMockFn((err, val) => console.log(val));
        myMockFn((err, val) => console.log(val));
    });

    test('user with callback', ()=>{
        let cb = jest.fn();
        let name = getUserName('evan', cb);
        expect(name).toEqual('EVAN');
        expect(cb.mock.calls.length).toBe(1);
    });
});