setIn [![Build Status](https://travis-ci.org/mzvonar/setIn.svg?branch=master)](https://travis-ci.org/mzvonar/setIn) [![Coverage Status](https://coveralls.io/repos/github/mzvonar/setIn/badge.svg?branch=master)](https://coveralls.io/github/mzvonar/setIn?branch=master) [![npm version](https://badge.fury.io/js/%40mzvonar%2Fsetin.svg)](https://badge.fury.io/js/%40mzvonar%2Fsetin)
=========

Sets value in object by path and returns copy. Path can be string or array (e.g. ['user', 'profile', 'gender']).  
If any part of path doesn't exist it is created. Always returns new copy of object.

## Installation

  `npm install @mzvonar/setin`

## Parameters
```javascript
setIn(context, path, value, push);
```

| Name | Description |
| - | - |
| ```context``` | Object in which the value will be set |
| ```path``` | Must be Array or String. See usage |
| ```value``` | Value to set in path |
| ```push``` | Whether to push the value to Array. See usage |

## Usage

```javascript
import setIn from '@mzvonar/setin';
  
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
                gender: 'female',
                address: {
                    country: 'slovakia'
                }
            }
        }
    }
``` 

### Push
If fourth parameter is ```true``` and last item in path is ```Array``` value is pushed to the Array

example:
```javascript       
    const context = {
        user: {
            name: 'Mike',
            nicknames: [
                'terminator',
                'maverick'
            ]
        }
    };
      
    const newContext = setIn(context, ['user', 'nickanmes'], 'vincent vega');
    
    console.log(newContext);
    /*
    {
        user: {
            name: 'Mike',
            nicknames: [
                'terminator',
                'maverick',
                'vincent vega'
            ]
        }
    }
    */
``` 

## mutableSetIn
If you need you can import mutableSetIn, which is exactly the same as setIn, but mutates the original context object without creating copy.

## Tests

  `npm test`