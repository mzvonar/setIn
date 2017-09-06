/**
 * Sets value in object according to provided path
 * @param {Object} context
 * @param {Array|string} path
 * @param {*} value
 * @param {Boolean} push If set to true and last object in path is Array value is pushed to the array
 * @return {Object} Copy of object with new value set
 */
module.exports = function setIn(context, path, value, push) {
    if(!path) {
        throw new Error('Path is undefined');
    }

    if(typeof path === 'string') {
        path = [path];
    }

    var currentPathPart = path.shift();

    if(typeof currentPathPart === 'undefined' || currentPathPart === null) {
        throw new Error('Path part is undefined');
    }

    if(!context) {
        context = isNaN(currentPathPart) ? {} : [];
    }

    var currentValue = path.length === 0 ? value : setIn(context[currentPathPart], path, value);

    var contextType = Object.prototype.toString.call(context);
    if(contextType === '[object Array]') {
        var copy = [].concat(context);

        if(push && path.length === 0) {
            copy.push(currentValue);
        }
        else {
            copy[currentPathPart] = currentValue;
        }

        return copy;
    }
    else if(contextType === '[object Object]') {
        var newValue = {};
        newValue[currentPathPart] = currentValue;

        return Object.assign({}, context, newValue);
    }
    else {
        throw new Error('Trying to add property to ' + contextType);
    }
};