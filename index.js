/**
 * Sets value in object according to provided path
 * @param {Object} context
 * @param {Array|string} path
 * @param {*} value
 * @param {Boolean} push If set to true and last object in path is Array value is pushed to the array
 * @return {Object} Copy of object with new value set
 */

function createSetIn(mutable) {
    return function setIn(context, path, value, push) {
        if(!path) {
            throw new Error('Path is undefined');
        }

        const pathType = Object.prototype.toString.call(path);
        if(pathType !== '[object Undefined]' && pathType !== '[object Array]') {
            path = [path];
        }
        else {
            path = [].concat(path);
        }

        var currentPathPart = path.shift();

        if(typeof currentPathPart === 'undefined' || currentPathPart === null) {
            throw new Error('Path part is undefined');
        }

        if(!context) {
            context = {};
        }

        var currentValue = path.length === 0 ? value : setIn(context[currentPathPart], path, value, push);

        var contextType = Object.prototype.toString.call(context);
        if(contextType === '[object Array]') {
            var copy = mutable ? context : [].concat(context);

            copy[currentPathPart] = currentValue;


            return copy;
        }
        else if(contextType === '[object Object]') {
            var newValue = mutable ? context : {};

            if(push && path.length === 0) {
                contextType = Object.prototype.toString.call(context[currentPathPart]);
                if(contextType !== '[object Array]') {
                    throw new Error('Cannot push to ' + contextType);
                }

                newValue[currentPathPart] = mutable ? context[currentPathPart] : [].concat(context[currentPathPart]);
                newValue[currentPathPart].push(value);
            }
            else {
                newValue[currentPathPart] = currentValue;
            }

            return mutable ? context : Object.assign({}, context, newValue);
        }
        else {
            throw new Error('Trying to add property to ' + contextType);
        }
    };
}

module.exports = createSetIn();
module.exports.mutableSetIn = createSetIn(true);