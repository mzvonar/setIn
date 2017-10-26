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

    it('should set value and return new copy of object by number path', function() {
        const newContext = setIn(context, 1, 'value');

        expect(newContext).toNotBe(context);
        expect(newContext).toEqual({
            user: {
                profile: {
                    gender: 'female'
                },
                ids: [1]
            },
            type: 'best',
            1: 'value'
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

    it('should create contest object with numeric key if it does not exist', function() {
        const newContext = setIn(context, ['user', 3], 'three');

        expect(newContext).toNotBe(context);
        expect(newContext).toEqual({
            user: {
                profile: {
                    gender: 'female'
                },
                ids: [1],
                3: 'three'
            },
            type: 'best'
        });
    });

    it('should add item to array if path part is number and context is array', function() {
        const newContext = setIn(context, ['user', 'ids', 3], 'three');

        expect(newContext).toNotBe(context);
        expect(newContext).toEqual({
            user: {
                profile: {
                    gender: 'female'
                },
                ids: [1,,,'three']
            },
            type: 'best'
        });
    });

    it('should set item in array if path part is number and context is array', function() {
        const context = {
            numbers: [
                'zero',
                'one',
                'two',
                'three'
            ]
        };

        const newContext = setIn(context, ['numbers', 1], 'ein');

        expect(newContext).toNotBe(context);
        expect(newContext).toEqual({
            numbers: [
                'zero',
                'ein',
                'two',
                'three'
            ]
        });
    });
});