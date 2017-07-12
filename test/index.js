const expect = require('expect');
const setIn = require('./../index');

describe('setIn', function() {
    const context = {
        user: {
            profile: {
                gender: 'female'
            }
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
                }
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
                }
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
                }
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
                }
            },
            type: 'best'
        });
    });
});