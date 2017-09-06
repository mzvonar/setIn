const expect = require('expect');
const setIn = require('./../index');

describe('setIn', function() {
    const context = {
        user: {
            profile: {
                gender: 'female'
            },
            ids: [1]
        },
        type: 'best'
    };

    it('should set value and return new copy of object by Array path', function() {
        const newContext = setIn(context, ['user', 'profile', 'gender'], 'male');

        expect(newContext).toNotBe(context);
        expect(newContext).toEqual({
            user: {
                profile: {
                    gender: 'male'
                },
                ids: [1]
            },
            type: 'best'
        });
    });

    it('should set value and return new copy of object by string path', function() {
        const newContext = setIn(context, 'type', 'bestest');

        expect(newContext).toNotBe(context);
        expect(newContext).toEqual({
            user: {
                profile: {
                    gender: 'female'
                },
                ids: [1]
            },
            type: 'bestest'
        });
    });

    it('should add value into new key and return new copy of object by string path', function() {
        const newContext = setIn(context, 'hero', 'batman');

        expect(newContext).toNotBe(context);
        expect(newContext).toEqual({
            user: {
                profile: {
                    gender: 'female'
                },
                ids: [1]
            },
            type: 'best',
            hero: 'batman'
        });
    });

    it('should add value into new nested keys and return new copy of object by Array path', function() {
        const newContext = setIn(context, ['user', 'profile', 'address', 'country'], 'slovakia');

        expect(newContext).toNotBe(context);
        expect(newContext).toEqual({
            user: {
                profile: {
                    gender: 'female',
                    address: {
                        country: 'slovakia'
                    }
                },
                ids: [1]
            },
            type: 'best'
        });
    });

    it('should push value to array', function() {
        const newContext = setIn(context, ['user', 'ids'], 2, true);

        expect(newContext).toNotBe(context);
        expect(newContext).toEqual({
            user: {
                profile: {
                    gender: 'female'
                },
                ids: [1, 2]
            },
            type: 'best'
        });
    });

    it('should throw an error if trying to push to non array', function() {
        const context = {
            user: {
                profile: {
                    gender: 'female'
                },
                ids: {
                    1: true
                }
            },
            type: 'best'
        };

        expect(function() {
            setIn(context, ['user', 'ids'], 2, true);
        }).toThrow('Cannot push to [object Object]');
    });
});