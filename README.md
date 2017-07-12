setIn [![Build Status](https://travis-ci.org/mzvonar/setIn.svg?branch=master)](https://travis-ci.org/mzvonar/setIn) [![Coverage Status](https://coveralls.io/repos/github/mzvonar/setIn/badge.svg?branch=master)](https://coveralls.io/github/mzvonar/setIn?branch=master) [![npm version](https://badge.fury.io/js/%40mzvonar%2Fsetin.svg)](https://badge.fury.io/js/%40mzvonar%2Fsetin)
=========

Sets value in object by path. Path can be string or array (e.g. ['user', 'profile', 'gender']).  
If any part of path doesn't exist it is created. Always returns new copy of object.

## Installation

  `npm install @mzvonar/setin`

## Usage

```javascript
const setIn = require('@mzvonar/setin');
  
const context = {
    user: {
        profile: {
            gender: 'female'
        }
    }
};
  
const newContext = setIn(context, ['user', 'profile', 'gender'], 'male');
 ```
 
  returns:
```javascript  
    {
        user: {
            profile: {
                gender: 'male'
            }
        }
    }
``` 

```javascript  
const newContext = setIn(context, ['user', 'profile', 'address', 'country'], 'slovakia');
 ```
 
  returns:
```javascript  
    {
        user: {
            profile: {
                gender: 'male',
                address: {
                    country: 'slovakia
                }
            }
        }
    }
``` 

## Tests

  `npm test`