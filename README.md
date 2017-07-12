setIn
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