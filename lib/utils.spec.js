const { getNewUser, mapObjectToArray } = require('./utils');

describe('mapObjectToArray()', () => {
    it('should map object to an array', () => {
        const result = mapObjectToArray({ age: 30, height: 185 }, (k, v) => {
            return v;
        });

        expect(result).toEqual([30, 185]);
    });

    it('should call callback of map function', () => {
        const cbSpy = jest.fn();
        const result = mapObjectToArray({ age: 30, height: 185 }, cbSpy);

        expect(cbSpy.mock.calls.length).toBe(2);
    })
});

describe('getNewUser()', () => {
    it('should get user', async () => {
        const user = await getNewUser(1);
        expect(user).toBeTruthy();
        expect(user.id).toBe(1);
    })

    it('should throw an error is user is not found', async () => {
        expect.assertions(1);
        try {
            const user = await getNewUser(2);
        } catch (e) {
            expect(e.message).toBe('User does not exist');
        }
    })
});